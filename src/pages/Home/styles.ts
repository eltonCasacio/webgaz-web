import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css``}
`;
