import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { CustomPriceType } from "../../domain/types";
import { CrudNavigationProps } from "../../domain/types/crudNavigation";

const HEADER = ["Tipo Combustivel", "Tipo Pagamento", "Tipo Entrega", "Preço", "Posto", "Ações"];

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
    <S.TableRowBody key={item.fuelType}>
      <S.TableDataBody>{item.paymentType}</S.TableDataBody>
      <S.TableDataBody>{item.deliveryType}</S.TableDataBody>
      <S.TableDataBody>{item.price}</S.TableDataBody>
      <S.TableDataBody>{item.createDate}</S.TableDataBody>
      <S.TableDataBody>{item.fuelStationId}</S.TableDataBody>
      <S.TableDataBodyIcon>
        <Eye size={15} onClick={() => params.functions.Details(item)} />
        <Edit size={15} onClick={() => params.functions.Update(item)} />
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
