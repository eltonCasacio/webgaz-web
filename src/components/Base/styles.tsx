import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;
    background-color: ${theme.colors.background};
  `}
`;

export const Content = styled.div`
  padding: 10px 25px;
  height: 100vh;
`;

export const Sidebar = styled.div`
`;
