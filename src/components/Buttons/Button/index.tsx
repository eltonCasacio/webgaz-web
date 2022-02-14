import * as S from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  color?: "#fff" | "#064263" | "#0b7bb8";
  bgColor?: "#d6d6d6" | "#0b7bb8";
  callback?: () => void;
};

const Button = ({
  children,
  icon,
  size = "medium",
  fullWidth = false,
  color = "#fff",
  bgColor = "#0b7bb8",
  callback,
}: ButtonProps) => (
  <S.Wrapper
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