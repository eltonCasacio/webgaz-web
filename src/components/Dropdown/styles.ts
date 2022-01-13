import styled, { css } from "styled-components";

export const Menu = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.lightGray};
    border-bottom: solid 2px ${theme.colors.gray};
    width: 200px;
    li {
      display: inline-block;
      position: relative;
    }
  `}
`;

export const Submenu = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    margin-top: 80px;
    width: 200px;

    background-color: ${theme.colors.lightGray};
    li {
      cursor: pointer;
      display: block;
      padding: 0 5px;
      margin-top: 5px;
    }
  `}
`;

export const LeftIcon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  svg {
    width: 2vw;
  }
`;

export const RightIcon = styled.div`
  justify-self: end;
  padding-right: 5px;

  cursor: pointer;
  svg {
    width: 1.8vw;
  }
`;

export const Title = styled.div`
  ${() => css`
    flex: 1;
    justify-self: flex-start;
    margin-left: 5px;
  `}
`;
