import React from "react";
import Input from "../Input";
import { Search } from "styled-icons/remix-line";
import styled from "styled-components";

export type InputSearchProps = {
  filter: string;
  callback(value: string): any;
};
const InputSearch: React.FC<InputSearchProps> = ({ filter, callback }) => {
  return (
    <Wrapper>
      <Input
        placeholder="Type for search..."
        onChange={(e) => callback(e.target.value)}
        value={filter}
        icon={<Search />}
        iconPosition="right"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
export default InputSearch;
