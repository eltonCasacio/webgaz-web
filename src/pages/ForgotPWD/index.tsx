import React from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";

const ForgotPWD: React.FC = () => {
  let navigate = useNavigate();
  const [email, setEmail] = React.useState("");

  const handleSubmit: React.ReactEventHandler = (event) => {
    event.preventDefault();
    console.log("ESQUECI A SENHA:", email);
  };

  return (
    <View
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      callback={() => navigate(`/sign-in`)}
    />
  );
};

export default ForgotPWD;
