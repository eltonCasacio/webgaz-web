import React from "react";
import View from "./View";

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit: React.FormEventHandler = async (event) => {
    event.preventDefault();
    console.log("EMAIL:", email);
    console.log("SENHA:", password);
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
