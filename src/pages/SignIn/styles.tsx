import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
    svg {
      color: ${theme.colors.gray};
    }
  `}
`;

export const UserIcon = styled.div`
  width: min-content;
  padding: 30px;
  background-color: #ffffff1a;
  border-radius: 200px;

  svg {
    width: 50px;
  }
`;

export const FormInputs = styled.div`
  ${({ theme }) => css`
    width: 50vw;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    /* box-shadow: 0 0 2px 1px ${theme.colors.white}; */
    /* background-color: ${theme.colors.primary}; */
  `}
`;

export const ForgotPWD = styled.div`
  ${({ theme }) => css`
    a {
      text-decoration: none;
      width: fit-content;
      color: ${theme.colors.white};
      cursor: pointer;
    }
  `}
`;

export const Submit = styled.div`
  ${({ theme }) => css`
    button {
      font-size: 16px;
      color: ${theme.colors.darkGray};
      margin-top: 20px;
    }

    svg {
      color: ${theme.colors.darkGray};
    }
  `}
`;
