import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  typeStyle?: "primary" | "secoundary";
  icon?: JSX.Element;
  as?: React.ElementType
} & ButtonTypes;

const Button = ({
  children,
  icon,
  size = "medium",
  typeStyle = "primary",
  as,
  ...props
}: ButtonProps) => (
  <S.Wrapper as={as} size={size} typeStyle={typeStyle} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
