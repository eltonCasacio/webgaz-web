import styled, { css } from "styled-components";
import { ButtonProps } from ".";
import Theme from "../../../styles/theme";

type WrapperProps = Pick<ButtonProps, "size" | "typeStyle">;
type ThemeProps = typeof Theme;

const wrapperModifiers = {
  small: (theme: ThemeProps) => css`
    height: 2rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: ThemeProps) => css`
    height: 2.5rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `,
  large: (theme: ThemeProps) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
  `,
};

const colorModifier = {
  primary: (theme: ThemeProps) => css`
    background-color: ${theme.colors.buttonPrimary};
    color: ${theme.colors.white};
  `,
  secoundary: (theme: ThemeProps) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.buttonSecundary};
    font-weight: bold;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size, typeStyle }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 50px;
  ${!!size && wrapperModifiers[size](theme)};
  ${!!typeStyle && colorModifier[typeStyle](theme)}

  cursor: pointer;
  :hover{
    opacity: 0.5;
  }
  `}
`;
