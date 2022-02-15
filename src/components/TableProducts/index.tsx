import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { CrudNavigationProps } from "../../types/crudNavigation";
import { Product as produtoTypes } from "../../types/product";

const HEADER = ["Tipo", "Fornecedor", "Litros", "Preco", ""];

type PagintionProps = {
  products: produtoTypes[];
  functions: CrudNavigationProps;
};

export const TableProducts: React.FC<PagintionProps> = (params) => {
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
        <S.TableDataBody>{item.tipo}</S.TableDataBody>
        <S.TableDataBody>{item.fornecedor}</S.TableDataBody>
        <S.TableDataBody>{item.litros}</S.TableDataBody>
        <S.TableDataBody>{item.preco}</S.TableDataBody>
        <S.TableDataBodyIcon>
          <Eye size={15} onClick={() => params.functions.Details(item)} />
          <Edit size={15} onClick={() => params.functions.Update(item)} />
        </S.TableDataBodyIcon>
      </S.TableRowBody>
    </>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{params.products.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
