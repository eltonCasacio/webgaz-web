import React from "react";
import View from "./View";

const ForgotPWD: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit: React.ReactEventHandler = (event) => {
    event.preventDefault();
    console.log("ESQUECI A SENHA:", email);
  };

  return <View handleSubmit={handleSubmit} setEmail={setEmail} />;
};

export default ForgotPWD;
