import styled, { css } from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
`;
export const Thead = styled.thead`
  box-shadow: 0px 0.2px 0.5px 0.2px rgb(170, 170, 170);
`;

export const TableRowHeader = styled.tr``;

export const TableDataHeader = styled.th`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.tableHeader};
    padding: 10px;
    text-align: left;
    text-transform: uppercase;
    position: -webkit-sticky; /* for Safari */
    font-size: 0.8rem;
  `}
`;

export const Tbody = styled.tbody`
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

export const TableRowBody = styled.tr`
  ${({ theme }) => css`
    font-size: 14px;
    box-shadow: 0px 0.2px 0.5px 0.2px rgb(170, 170, 170);
    color: ${theme.colors.white};
    :hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  `}
`;
export const TableDataBody = styled.td`
  padding: 10px;
`;

export const TableDataBodyIcon = styled.td`
  width: 55px;
  svg {
    margin-left: 10px;
    width: 14px;
    cursor: pointer;
  }
`;
