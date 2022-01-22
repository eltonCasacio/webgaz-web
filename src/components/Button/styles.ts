import styled, { css } from "styled-components";
import { ButtonProps } from ".";

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  "size" | "fullWidth"
>;

const ButtonModifier = {
  small: (theme: any) => css`
    height: 1.5rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xsmall};
  `,
  medium: (theme: any) => css`
    height: 2rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
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
  ${({ theme, size, fullWidth, hasIcon }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.secondary};
    border: none;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};

    ${!!size && ButtonModifier[size](theme)};
    ${!!fullWidth && ButtonModifier.fullWidth()};
    ${!!hasIcon && ButtonModifier.withIcon()}
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  `}
`;
