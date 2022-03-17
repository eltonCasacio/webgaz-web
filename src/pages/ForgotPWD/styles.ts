import styled, { css } from "styled-components";

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.backgroundAuth};
    color: ${theme.colors.white};
  `}
`;

export const UserIcon = styled.div`
  width: min-content;
  padding: 30px;
  color: #c3c3c3;
  background-color: #ffffff2b;
  border-radius: 200px;
  margin-bottom: 30px;
  svg {
    width: 50px;
  }
`;

export const Submit = styled.div`
  ${({ theme }) => css`
    button {
      font-size: 16px;
      color: ${theme.colors.darkGray};
      margin: 20px 0;
    }

    svg {
      color: ${theme.colors.darkGray};
    }
  `}
`;

export const MessageInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    margin: 30px 0;
    color: #c3c3c3;
  `}
`;
