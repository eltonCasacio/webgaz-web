import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div``;

export const ContentHeader = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: 50px 1fr;
    border-radius: 5px;
    background-color: ${theme.colors.table};
  `}
`;

export const Table = styled.div`
  ${({ theme }) => css`
    height: 73.5vh;
    margin-top: 15px;
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
  `}
`;

export const FilterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10px;
`;

export const Filter = styled.div`
  width: 35vw;
`;
