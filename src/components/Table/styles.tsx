import styled, { css } from "styled-components";

export type TableProps = {
  cols: string;
};

export const Table = styled.table`
  ${() => css`
    width: 100%;
    text-align: left;
  `}
`;

export const Thead = styled.thead<TableProps>`
  ${({ cols }) => css`
    tr {
      display: grid;
      grid-template-columns: ${cols};
      padding: 10px;
      border: solid 2px #7b7b7b5c;
      font-size: 0.9rem;
    }
  `}
`;

export const Tbody = styled.tbody<TableProps>`
  ${({ cols }) => css`
    tr {
      display: grid;
      grid-template-columns: ${cols};
      height: 40px;
      padding: 10px;
      border-bottom: solid 2px #7b7b7b5c;
      border-left: solid 2px #7b7b7b5c;
      border-right: solid 2px #7b7b7b5c;
      font-size: 0.9rem;

      td {
          margin-right: 50px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  `}
`;
