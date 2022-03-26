import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { Block } from "styled-icons/boxicons-regular";

import { CustomPriceType } from "../../../../domain/types";
import { CrudNavigationProps } from "../../../../domain/types/crudNavigation";

const HEADER = [
  "Posto",
  "Tipo Combustivel",
  "Tipo Pagamento",
  "Tipo Entrega",
  "Preço",
  "Ativo?",
  "Ações",
];

type PagintionProps = {
  customPrice: CustomPriceType[];
  functions: CrudNavigationProps;
};

export const TableCustomPrice: React.FC<PagintionProps> = (params) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: CustomPriceType) => (
    <S.TableRowBody key={item.id}>
      <S.TableDataBody>{item.fuelStationId}</S.TableDataBody>
      <S.TableDataBody>{item.fuelType}</S.TableDataBody>
      <S.TableDataBody>{item.paymentType}</S.TableDataBody>
      <S.TableDataBody>{item.deliveryType}</S.TableDataBody>
      <S.TableDataBody>{item.price}</S.TableDataBody>
      <S.TableDataBody>{item.isActive}</S.TableDataBody>
      <S.TableDataBodyIcon>
        <Eye onClick={() => params.functions.Details(item)} />
        <Edit onClick={() => params.functions.Update(item)} />
        <Block onClick={() => params.functions.Cancel(item.id)} />
      </S.TableDataBodyIcon>
    </S.TableRowBody>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{params.customPrice.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
