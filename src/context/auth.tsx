import React, { createContext, useEffect, useState } from "react";
import * as auth from '../srvices/auth'

type AuthContextProps = {
  children?: React.ReactNode;
  isAuthenticate: Boolean;
  handleSignin: () => void;
  handleSignout: () => void;
};

const authContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(false);
  }, []);

  const handleSignin = async () => {
    const result = await auth.signin()
    setIsAuthenticate(true);
  };

  const handleSignout = async ():Promise<void> => {
    const result = await auth.signout()
    setIsAuthenticate(false);
  };

  if(loading) (<h1>Loading</h1>)

  return (
    <authContext.Provider
      value={{ isAuthenticate, handleSignin, handleSignout }}
    >
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
