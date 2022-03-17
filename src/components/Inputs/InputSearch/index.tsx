import React from "react";
import styled, { css } from "styled-components";

export type InputSearchProps = {
  filter: string;
  callback(value: string): any;
};
const InputSearch: React.FC<InputSearchProps> = ({ filter, callback }) => {
  return (
    <Wrapper>
      <Input
        placeholder="procurar..."
        onChange={(e) => callback(e.target.value)}
        value={filter}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 10px 0;
`;

const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    padding: 8px 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 0 0 2px 1px ${theme.colors.primary};
    background-color: ${theme.colors.input};
  `}
`;

export default InputSearch;
