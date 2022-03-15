import styled, { css } from "styled-components";
import * as InputStyle from "../Inputs/Input/styles";
import * as ButtonStyle from "../Buttons/Button/styles";

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${InputStyle.Wrapper} {
      margin-top: 20px;
    }
    ${ButtonStyle.Wrapper} {
      margin: ${theme.spacings.small} auto ${theme.spacings.xsmall};
    }
  `}
`;

export const ForgotPassword = styled.div`
  ${({ theme }) => css`
    a {
      display: block;
      font-size: 12px;
      color: ${theme.colors.darkGray};
      text-decoration: none;
      text-align: center;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  `}
`;
