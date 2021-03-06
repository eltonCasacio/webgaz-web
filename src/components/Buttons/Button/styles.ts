import styled, { css } from "styled-components";
import { ButtonProps } from ".";

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  "size" | "fullWidth" | "color" | "bgColor"
>;

const ButtonModifier = {
  small: (theme: any) => css`
    height: 1.4rem;
    font-size: ${theme.font.sizes.xxsmall};
    padding: 14px 25px;
    
  `,

  medium: (theme: any) => css`
    height: 2rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    width: 220px;
  `,

  large: (theme: any) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () =>
    css`
      width: 100%;
    `,

  withIcon: () => css`
    display: inline-flex;
    svg {
      margin-right: 2px;
    }
  `,
};
export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, color, bgColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${bgColor};
    border: none;
    color: ${color};
    border-radius: 5px;

    ${!!size && ButtonModifier[size](theme)};
    ${!!fullWidth && ButtonModifier.fullWidth()};
    ${!!hasIcon && ButtonModifier.withIcon()}
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  `}
`;
