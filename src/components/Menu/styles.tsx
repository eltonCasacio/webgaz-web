import styled, { css } from "styled-components";

type MenuItemProps = {
  showMenu: boolean;
};

const MenuModifier = {
  showMenu: () => css`
    padding: 8px;
    svg {
      width: 1.2rem;
      margin: 10px;
    }
  `,
  hiddeMenu: () => css`
    margin-top: 20px;
    padding: 0 10px;
    svg {
      width: 1.2rem;
      margin: 5px;
    }
  `,
};

export const MenuItem = styled.li<MenuItemProps>`
  ${({ showMenu }) => css`
    ${showMenu ? MenuModifier.showMenu() : MenuModifier.hiddeMenu()}
    cursor: pointer;
    a {
      text-decoration: none;
      width: 100%;
      color: #ffffffae;
    }
  `}
`;

export const Wrapper = styled.nav`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    font-size: 1rem;
  `}
`;

export const Menus = styled.div`
  height: 80vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(170, 170, 170, 0.349);
  }
`;
