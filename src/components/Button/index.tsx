import * as S from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  callback?: () => void;
};

const Button = ({
  children,
  icon,
  size = "medium",
  fullWidth = false,
  callback,
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    onClick={callback}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
