import styled, { css } from "styled-components";
import * as InputStyle from "../Input/styles";
import * as ButtonStyle from "../Button/styles";

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${InputStyle.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${ButtonStyle.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;

export const ForgotPassword = styled.div`
  ${({ theme }) => css`
    a {
      display: block;
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.white};
      text-decoration: none;
      text-align: center;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  `}
`;
