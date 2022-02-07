import styled, { css } from "styled-components";

export type MenuProps = {
  showMenu: boolean;
};

export const Wrapper = styled.form<MenuProps>`
  ${({ theme, showMenu }) => css`
    display: flex;
    flex-direction: column;
    min-width: ${showMenu ? "250px" : "auto"};
    background-color: ${theme.colors.primary};
    padding: ${showMenu ? "20px 10px" : "20px 5px"};
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    height: 50px;
    color: ${theme.colors.white};
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-left: 10px;
  `}
`;

export const TitleLogo = styled.div<MenuProps>`
  ${({ showMenu }) => css`
    display: ${showMenu ? "flex" : "none"};
  `}
`;

export const ArrowBack = styled.div`
  cursor: pointer;
`;
