import styled, { css } from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.div`
  display: flex;
  -webkit-user-select: none;
  user-select: none;
`;

type PaginationItemProps = {
  selected?: boolean;
  show?: boolean;
};
export const PaginationItem = styled.div<PaginationItemProps>`
  ${({ selected = false, show = true }) => css`
    display: ${show ? "flex" : "none"};
    align-items: center;
    margin: 0 3px;
    padding: 2px 5px;
    font-size: small;
    border-radius: 2px;
    background-color: #e3e2e4a2;
    border: ${!!selected && "solid 1px #000"};
    cursor: pointer;

    :hover {
      background-color: #b5b5b5a1;
    }
  `}
`;
