import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  box-shadow: 0 0 5px 1px #000;
  border-collapse: collapse;
`;
export const Thead = styled.thead``;
export const TableRowHeader = styled.tr``;
export const TableDataHeader = styled.th`
  padding: 10px;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #095076;
  color: #fff;
`;
export const Tbody = styled.tbody``;

export const TableRowBody = styled.tr`
  font-size: 14px;
  :hover {
    opacity: 0.8;
  }
  :nth-child(even) {
    background-color: #e6e8e978;
  }
`;
export const TableDataBody = styled.td`
  padding: 5px 10px;

  svg {
    width: 12px;
    cursor: pointer;
  }
`;
