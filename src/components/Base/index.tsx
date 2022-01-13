import React from "react";
import Header from "../header";
import { Wrapper } from "./styles";

type BaseProps = {
  children: React.ReactNode;
};
export default function Base({ children }: BaseProps) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
