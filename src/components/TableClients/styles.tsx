import styled, { css } from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  color: #1e1529;
`;
export const Thead = styled.thead`
  border-bottom: solid 2px #1e1529;
`;

export const TableRowHeader = styled.tr``;

export const TableDataHeader = styled.th`
  ${() => css`
    padding: 10px;
    text-align: left;
    text-transform: uppercase;
    position: -webkit-sticky; /* for Safari */
  `}
`;
export const Tbody = styled.tbody``;

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
