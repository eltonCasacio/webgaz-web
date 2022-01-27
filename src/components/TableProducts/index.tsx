import React from "react";
import * as S from "./styles";

import { Product as produtoTypes } from "../../types/product";

const HEADER = ["Tipo", "Fornecedor", "Litros", "Preco"];

type PagintionProps = {
  products: produtoTypes[];
};
export const TableProducts: React.FC<PagintionProps> = ({ products }) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: produtoTypes) => (
    <>
      <S.TableRowBody key={item.tipo}>
        <S.TableDataBody>{item.fornecedor}</S.TableDataBody>
        <S.TableDataBody>{item.litros}</S.TableDataBody>
        <S.TableDataBody>{item.preco}</S.TableDataBody>
      </S.TableRowBody>
    </>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{products.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
