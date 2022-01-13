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
    ${!!orientation && MenuModifier[orientation]()}
    flex: 1;
    font-size: 1.2rem;
    font-weight: 600;

    a {
      text-decoration: none;
      margin: 0 5px;
      color: rgb(255, 255, 255);

      :hover {
        color: #ffffffdd;
      }
    }
  `}
`;
