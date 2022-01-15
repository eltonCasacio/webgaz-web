import React from "react";
import Input from "../Input";

export type InputSearchProps = {
  filter: string;
  callback(value: string): any;
};
const InputSearch: React.FC<InputSearchProps> = ({ filter, callback }) => {
  return (
    <div>
      <Input
        placeholder="Type for search..."
        onChange={(e) => callback(e.target.value)}
        value={filter}
      />
    </div>
  );
};

export default InputSearch;
