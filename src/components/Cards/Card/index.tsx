import React from "react";
import * as S from "./styles";

export type CardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: string;
};

export default function Card({ title, subtitle, children, footer }: CardProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderSubtitle>{subtitle}</S.HeaderSubtitle>
      </S.Header>
      <S.Content>{children}</S.Content>
      <S.Footer>{footer}</S.Footer>
    </S.Wrapper>
  );
}
