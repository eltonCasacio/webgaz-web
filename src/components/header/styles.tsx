import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 10vh;
  background-color: transparent;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.title};
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 0.9rem;
    color: ${theme.colors.subtitle};
  `}
`;

export const Signout = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.title};
    font-size: medium;
    cursor: pointer;
    svg {
      margin-left: 3px;
      width: 16px;
    }
  `}
`;
