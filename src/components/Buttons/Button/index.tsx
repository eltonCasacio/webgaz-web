import * as S from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  color?: "#fff" | "#000" | "#0b7bb8";
  bgColor?: "#867AD2" | "#64E384" | "#D57176";
  type?: "button" | "submit";
  callback?: () => void;
};

const Button = ({
  children,
  icon,
  size = "medium",
  fullWidth = false,
  color = "#fff",
  bgColor = "#867AD2",
  type = "button",
  callback,
}: ButtonProps) => (
  <S.Wrapper
    type={type}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    color={color}
    bgColor={bgColor}
    onClick={callback}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
