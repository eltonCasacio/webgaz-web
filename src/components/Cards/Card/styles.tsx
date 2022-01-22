import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 10px;
  border: solid 2px #bfc2c5;
  border-radius: 5px;
`;

export const Header = styled.div``;
export const HeaderTitle = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;
export const HeaderSubtitle = styled.h2`
  font-size: 1rem;
  font-weight: 200;
`;

export const Content = styled.div`
  margin: 20px 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Footer = styled.div``;
