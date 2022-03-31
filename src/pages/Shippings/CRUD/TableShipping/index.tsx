import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { Block } from "styled-icons/boxicons-regular";

import { ShippingType } from "../../../../domain/types/shipping";
import { CrudNavigationProps } from "../../../../domain/types/crudNavigation";

const HEADER = ["Nome", "cnpj", "Email", "Telefone", "Cidade", "UF", "ações"];

type PagintionProps = {
  shipping: ShippingType[];
  functions: CrudNavigationProps;
};

export const TableShipping: React.FC<PagintionProps> = (params) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: ShippingType) => (
    <S.TableRowBody key={item.cnpj}>
      <S.TableDataBody>{item.name}</S.TableDataBody>
      <S.TableDataBody>{item.cnpj}</S.TableDataBody>
      <S.TableDataBody>{item.email}</S.TableDataBody>
      <S.TableDataBody>{item.phoneNumber}</S.TableDataBody>
      <S.TableDataBody>{item.city}</S.TableDataBody>
      <S.TableDataBody>{item.uf}</S.TableDataBody>
      <S.TableDataBodyIcon>
        <Eye  onClick={() => params.functions.Details(item)} />
        <Edit  onClick={() => params.functions.Update(item)} />
        <Block  onClick={() => params.functions.Delete(Number(item.cnpj))} />
      </S.TableDataBodyIcon>
    </S.TableRowBody>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{params.shipping.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
