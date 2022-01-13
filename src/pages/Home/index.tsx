/* eslint-disable array-callback-return */
import { Search } from "styled-icons/boxicons-regular";

import { authors } from "../../mocks/Author/data";
import { Headers } from "../../mocks/Table";

import ButtonSearch from "../../components/ButtonSearch";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Table from "../../components/Table";
import Card from "../../components/Card";
import * as S from "./styles";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState(authors);
  const [showGrid, setShowGrid] = useState(true);

  const handleSearch = () => {
    const aux = [] as any;
    authors.map((item) => {
      const filterLower = filter.toLowerCase();
      const has = item.title.toLowerCase().includes(filterLower);
      if (has) {
        aux.push(item);
      }
    });
    setProducts(aux);
  };

  const handleClear = () => {
    setFilter("");
  };

  const handleSetLayout = (value = "") => {
    setShowGrid(value === "Grid View");
  };

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <Input
          placeholder="Type for search..."
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />

        <Dropdown setShowGrid={handleSetLayout} />

        <S.ButtonsWrapper>
          <ButtonSearch
            onMouseDown={handleSearch}
            icon={<Search size={20} onClick={handleSearch} />}
          >
            SEARCH
          </ButtonSearch>
          <ButtonSearch onMouseDown={handleClear} typeStyle="secoundary">
            CLEAR
          </ButtonSearch>
        </S.ButtonsWrapper>
      </S.SearchWrapper>

      {showGrid ? (
        <S.CardsWrapper>
          {products.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.author}
              children={card.content}
              footer={card.date}
            />
          ))}
        </S.CardsWrapper>
      ) : (
        <Table headers={Headers} data={authors} />
      )}
    </S.Wrapper>
  );
}
