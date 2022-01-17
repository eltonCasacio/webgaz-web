import React from "react";
import Sidebar from "../Sidebar";
import * as S from "./styles";

type BaseProps = {
  children: React.ReactNode;
};
export default function Base({ children }: BaseProps) {
  return (
    <S.Wrapper>
      <Sidebar />

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
