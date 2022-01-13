import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh; 
  max-height: 8vh;
  padding: 0 45px;
  box-shadow: 0 0 10px 3px #767676f8;
  background-color: #0f3ffd;
`;

export const Logo = styled.img`
  width: 180px;
  float: left;
  object-fit: contain;
`;

export const Menus = styled.section`
  flex: 1;
  margin-left: 20px;
`;

export const Signout = styled.div`
  display: flex;
  align-items: center;
  color: aliceblue;
  cursor: pointer;
  svg {
    margin-left: 3px;
  }
`;
