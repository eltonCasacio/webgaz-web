import styled, { css } from "styled-components";

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.primary};
    padding: 20px;
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 22px;
    font-weight: bold;
    height: 50px;
    margin-bottom: 20px;
  `}
`;
