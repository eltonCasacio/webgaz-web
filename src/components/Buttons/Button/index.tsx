import * as S from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  color?: "#fff" | "#000" | "#0b7bb8";
  bgColor?: "#8349C1" | "#64E384" | "#D57176";
  callback?: () => void;
};

const Button = ({
  children,
  icon,
  size = "medium",
  fullWidth = false,
  color = "#fff",
  bgColor = "#8349C1",
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
