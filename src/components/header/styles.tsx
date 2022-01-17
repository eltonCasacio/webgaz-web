import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  color: #535353;
`;

export const SubTitle = styled.h2`
  font-size: 1.3rem;
  color: #58555b;
`;

export const Signout = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  cursor: pointer;
  svg {
    margin-left: 3px;
  }
`;
