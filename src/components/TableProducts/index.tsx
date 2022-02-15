import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { CrudNavigationProps } from "../../types/crudNavigation";
import { ProductType } from "../../types/product";

const HEADER = ["Tipo", "Fornecedor", "Litros", "Preco", ""];

type PagintionProps = {
  products: ProductType[];
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

  const makeRow = (item: ProductType) => (
    <>
      <S.TableRowBody key={item.type}>
        <S.TableDataBody>{item.suppliers}</S.TableDataBody>
        <S.TableDataBody>{item.type}</S.TableDataBody>
        <S.TableDataBody>{item.liters}</S.TableDataBody>
        <S.TableDataBody>{item.price}</S.TableDataBody>
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
