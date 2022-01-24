import styled, { css } from "styled-components";

type MenuItemProps = {
  showMenu: boolean;
};

const MenuModifier = {
  showMenu: () => css`
    svg {
      width: 1.2rem;
      /* margin-right: 10px; */
    }
  `,
  hiddeMenu: () => css`
    svg {
      width: 1.5rem;
      margin-top: 15px;
    }
  `,
};

export const Wrapper = styled.nav`
  ${() => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 1.2rem;
  `}
`;

export const MenuItem = styled.li<MenuItemProps>`
  ${({ showMenu }) => css`
    display: flex;
    padding: 10px 0;
    border-bottom: solid 1px ${showMenu ? "#ffffff2d" : "none"};
    color: #ffffffae;

    ${showMenu ? MenuModifier.showMenu() : MenuModifier.hiddeMenu()}

    cursor: pointer;

    a {
      text-decoration: none;
      width: 100%;
      color: #ffffffae;
    }

    :hover {
      background-color: #ffffff1f;
      color: #ffffff;

      a {
        color: #ffffff;
      }
    }
  `}
`;
