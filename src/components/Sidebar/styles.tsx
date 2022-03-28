import styled, { css } from "styled-components";

export type MenuProps = {
  showMenu: boolean;
};

export const Wrapper = styled.form<MenuProps>`
  ${({ theme, showMenu }) => css`
    display: flex;
    flex-direction: column;
    min-width: ${showMenu ? "250px" : "auto"};
    background-color: ${theme.colors.sidebarBG};
    padding: 5px;
    box-shadow: 0 0 5px 0.5px #ffffff47;
  `}
`;

export const ArrowBack = styled.div<MenuProps>`
  cursor: pointer;
  position: absolute;
  align-self: flex-end;
  ${({ showMenu }) => css`
    align-self: ${!showMenu ? "center" : ""};
  `}
`;

export const Footer = styled.div`
  color: aliceblue;
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const LogoImage = styled.img`
  width: 12vh;
  align-self: center;
`;