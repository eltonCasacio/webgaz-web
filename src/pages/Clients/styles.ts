import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 13vh 1fr;
  height: 100%;
  padding-bottom: 10px;
`;

export const ContentHeader = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  /* background-color: #322445; */
  border-radius: 10px;
`;

export const FilterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;
`;

export const Table = styled.div`
  ${({ theme }) => css`
    margin-top: 25px;
    background-color: ${theme.colors.table};
    border-radius: 2px;
    box-shadow: 0 0 3px 0.5px ${theme.colors.border};
  `}
`;

export const Filter = styled.div`
  width: 35vw;
`;
