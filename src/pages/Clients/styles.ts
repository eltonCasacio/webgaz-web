import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  background-color: #3cff00;
  height: inherit;
`;

export const ContentHeader = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  border-radius: 10px;
  background-color: transparent;
  padding-top: 10vh;
`;

export const Table = styled.div`
  ${({ theme }) => css`
    margin-top: 10px;
    height: 65vh;
    box-shadow: 0 0 5px 0.5px ${theme.colors.border};

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
  padding: 30px 0px;
`;

export const Filter = styled.div`
  width: 35vw;
`;
