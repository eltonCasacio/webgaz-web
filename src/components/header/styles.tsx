import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 10vh;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  color: #565b65;
  margin-bottom: 5px;
`;

export const SubTitle = styled.h2`
  font-size: 0.9rem;
  color: #686c82;
`;

export const Signout = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  font-size: small;
  cursor: pointer;
  svg {
    margin-left: 3px;
    width: 16px;
  }
`;
