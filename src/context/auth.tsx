import React, { createContext, useEffect, useState } from "react";
import * as auth from "../srvices/auth";
import API from "../srvices/api";
import { useNavigate } from "react-router-dom";

type AuthContextProps = {
  isAuthenticate: boolean;
  user: object | null;
  loading: boolean;
  handleSignin({
    email,
    password,
  }: auth.RequestSignInProps): Promise<auth.ResponseSignInProps>;
  handleSignout(): Promise<boolean>;
};

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      const storageToken = localStorage.getItem("token");
      const storageUser = localStorage.getItem("user");

      if (storageToken && storageUser) {
        API.defaults.headers.common["Authorization"] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else {
        navigate("sign-in");
      }
    }

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignin = async ({
    email = "",
    password = "",
  }: auth.RequestSignInProps): Promise<auth.ResponseSignInProps> => {
    const response = await auth.signin({ email, password });

    API.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    setUser(response.user);
    navigate("/home", { replace: true });
    return response;
  };

  const handleSignout = async (): Promise<boolean> => {
    localStorage.clear();
    setUser(null);
    navigate("sign-in");
    return true;
  };

  // if (loading) return <h1>Loading</h1>;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticate: !!user,
        user,
        loading,
        handleSignin,
        handleSignout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
