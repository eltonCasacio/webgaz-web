import styled, { css } from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  color: #1e1529;
`;
export const Thead = styled.thead`
  border-bottom: solid 3px #474251;
`;

export const TableRowHeader = styled.tr``;

export const TableDataHeader = styled.th`
  ${({ theme }) => css`
    color: ${theme.colors.title};
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
  font-size: 14px;
  border-bottom: solid 1px #1e1529;

  :hover {
    background-color: #5b4f6c;
  }
`;
export const TableDataBody = styled.td`
  padding: 10px;
`;

export const TableDataBodyIcon = styled.td`
  width: 55px;
  svg {
    margin-left: 10px;
    width: 12px;
    cursor: pointer;
  }
`;
