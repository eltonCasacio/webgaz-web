import styled, { css } from "styled-components";

type MenuProps = {
  orientation?: "horizontal" | "vertical";
};

const MenuModifier = {
  horizontal: () => css`
    flex-direction: row;
  `,
  vertical: () => css`
    flex-direction: column;
  `,
};

export const Wrapper = styled.nav<MenuProps>`
  ${({ orientation }) => css`
    display: flex;
    flex-direction: column;
    ${!!orientation && MenuModifier[orientation]()}
    flex: 1;
    font-size: 1.2rem;
  `}
`;

export const MenuItem = styled.li`
  display: flex;
  padding: 10px 0;
  border-bottom: solid 1px #ffffff2d;
  color: #ffffffae;

  cursor: pointer;

  :hover {
    background-color: #ffffff1f;
    color: #ffffff;

    a {
      color: #ffffff;
    }
  }

  svg {
    width: 1rem;
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    width: 100%;
    color: #ffffffae;
  }
`;
