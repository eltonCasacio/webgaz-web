import { useState } from "react";
import * as S from "./styles";

import { Grid3x2GapFill } from "styled-icons/bootstrap";
import { ArrowDown, List } from "styled-icons/evaicons-solid";

const dropDownData = ["Grid View", "List View"];

export type DropProps = { setShowGrid: any };

const Dropdown = ({ setShowGrid }: DropProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Grid View");

  const MenuItem = (content = "Grid View", idx = 0) => (
    <li
      key={idx}
      onClick={() => {
        setSelectedItem(content);
        setShowGrid(content);
        setIsOpen(false);
      }}
    >
      {content}
    </li>
  );

  return (
    <S.Menu>
      <S.LeftIcon>
        {selectedItem === "Grid View" ? <Grid3x2GapFill /> : <List />}
        <S.Title>{selectedItem}</S.Title>
      </S.LeftIcon>
      <li>
        <S.RightIcon onClick={() => setIsOpen(!isOpen)}>
          <ArrowDown />
        </S.RightIcon>
      </li>
      {isOpen && (
        <S.Submenu>
          {dropDownData.map((item, idx) => MenuItem(item, idx))}
        </S.Submenu>
      )}
    </S.Menu>
  );
};

export default Dropdown;
