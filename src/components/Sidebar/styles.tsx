import styled, { css } from "styled-components";

export type MenuProps = {
  showMenu: boolean;
};

export const Wrapper = styled.form<MenuProps>`
  ${({ theme, showMenu }) => css`
    display: flex;
    flex-direction: column;
    min-width: ${showMenu ? "220px" : "auto"};
    background-color: ${theme.colors.primary};
    padding: 5px;
  `}
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ArrowBack = styled.div<MenuProps>`
  cursor: pointer;
  ${({ showMenu }) => css`
    align-self: ${!showMenu? 'center': ''};
  `}
`;

export const Footer = styled.div`
  color: aliceblue;
  display: flex;
  justify-content: center;
  margin: 10px;
`