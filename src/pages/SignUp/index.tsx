import React, { createRef, InputHTMLAttributes } from "react";
import { InputType } from "zlib";
import View from "./View";

export default function SignUp() {
  const nameRef = createRef<InputHTMLAttributes<InputType>>();
  const emailRef = createRef<InputHTMLAttributes<InputType>>();
  const passwordRef = createRef<InputHTMLAttributes<InputType>>();

  const handleSubmit: React.ReactEventHandler = async (event) => {
    event.preventDefault();
    console.log(
      "CADASTRO:",
      nameRef.current?.value,
      emailRef.current?.value,
      passwordRef.current?.value
    );
  };

  return (
    <View
      handleSubmit={handleSubmit}
      nameRef={nameRef}
      emailRef={emailRef}
      passwordRef={passwordRef}
    />
  );
}
