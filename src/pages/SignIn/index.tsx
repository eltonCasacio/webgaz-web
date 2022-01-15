import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../context/auth";
import View from "./View";

const SignIn: React.FC = () => {
  let navigate = useNavigate();
  const { handleSignin } = useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit: React.FormEventHandler = async (event) => {
    event.preventDefault();
    const res = await handleSignin({ email, password });

    console.log("SignIn::handleSubmit::", res);

    if (res.token) navigate("/");
  };

  return (
    <View
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignIn;
