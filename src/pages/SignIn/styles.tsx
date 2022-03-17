import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.backgroundAuth};
    svg {
      color: ${theme.colors.gray};
    }
  `}
`;

export const Input = styled.div`
  margin-bottom: 25px;
`;

export const Image = styled.img`
  width: 190px;
  margin-bottom: 25px;
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
      color: ${theme.colors.darkGray};
      cursor: pointer;
    }
  `}
`;

export const Submit = styled.div`
  ${({ theme }) => css`
    button {
      margin: 0 auto;
      margin-top: 50px;
    }

    svg {
      color: ${theme.colors.darkGray};
    }
  `}
`;
