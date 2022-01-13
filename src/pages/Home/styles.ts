import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    padding: ${theme.spacings.large};
  `}
`;

export const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 45px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 300px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
