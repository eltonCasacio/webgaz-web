import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    height: 90vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.backgroundAuth}
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: #5f6163;
    padding: 3px;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 2px 1px #373737a2;
    padding: 5px;
    margin: 10px 0;
    color: #5b5959;
    font-size: 16px;
    outline: none;

    :focus {
      box-shadow: 0 0 5px 1px #434343e4;
    }
  `}
`;

export const FormInputs = styled.div`
  ${({ theme }) => css`
    height: 40vh;
    width: 60vw;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px 1px #afafafc5;
    background-color: #ffffff;
  `}
`;

export const Submit = styled.input`
  ${({ theme }) => css`
    border: none;
    padding: 5px 15px;
    background-color: ${theme.colors.primary};
    border-radius: 10px;
    margin-top: 50px;
    color: aliceblue;
    min-width: 150px;
    font-size: 16px;
  `}
`;
