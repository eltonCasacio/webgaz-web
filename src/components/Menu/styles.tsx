import styled, { css } from "styled-components";

type MenuItemProps = {
  showMenu: boolean;
};

const MenuModifier = {
  showMenu: () => css`
    svg {
      width: 1.2rem;
      margin: 10px;
    }
  `,
  hiddeMenu: () => css`
    svg {
      width: 1.2rem;
      margin: 5px;
    }
  `,
};

export const Wrapper = styled.nav`
  ${() => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 1rem;
  `}
`;

export const Menus = styled.div`
  margin-top: 5vh;
  height: 70%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(170, 170, 170);
  }
`;

export const MenuItem = styled.li<MenuItemProps>`
  ${({ showMenu }) => css`
    display: flex;
    justify-self: center;
    padding: 10px;
    border-radius: 8px;
    ${showMenu ? MenuModifier.showMenu() : MenuModifier.hiddeMenu()}
    cursor: pointer;

    a {
      text-decoration: none;
      width: 100%;
      color: #ffffffae;
    }
  `}
`;

export const LogoImage = styled.img`
  width: 110px;
  align-self: center;
`;
