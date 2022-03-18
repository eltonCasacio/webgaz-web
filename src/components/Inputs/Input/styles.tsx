import styled, { css } from "styled-components";

import { TextFieldProps } from ".";

type IconPositionProps = Pick<TextFieldProps, "iconPosition">;

type WrapperProps = Pick<TextFieldProps, "disabled"> & { error?: boolean };

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: red;
    }
    ${Icon},
    ${Label} {
      color: red;
    }
  `,
  disabled: () => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: gray;
      &::placeholder {
        color: currentColor;
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ error, disabled }) => css`
    flex: 1;
    margin: 10px 0;
    ${error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.backgroundAuth};
    margin-top: 5px;
    border-radius: 5px;
    /* &:focus-within {
      box-shadow: 0 0 0.1rem #ccc;
    } */
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.darkGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall};
    border: 0;
    outline: none;
    width: ${iconPosition === "right" ? `calc(100% - 2.2rem)` : `100%`};
    -webkit-box-shadow: 0 0 0px 1000px #2F2C44 inset;
    -webkit-text-fill-color:   ${theme.colors.lightGray};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
    padding-bottom: 10px;
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.gray};
    order: ${iconPosition === "right" ? 1 : 0};
    & > svg {
      width: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
