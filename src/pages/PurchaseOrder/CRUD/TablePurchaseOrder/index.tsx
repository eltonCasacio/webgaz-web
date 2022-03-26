import React from "react";
import * as S from "./styles";
import { Cancel } from "styled-icons/material";
import { Eye } from "styled-icons/bootstrap";
import { PurchaseOrderType } from "../../../../domain/types";
import { CrudNavigationProps } from "../../../../domain/types/crudNavigation";

const HEADER = ["Codigo", "Tipo", "Forma Pagamento", "Litros",  "Valor Total", "Status", "Ações"];

type PagintionProps = {
  purchaseOrder: PurchaseOrderType[];
  functions: CrudNavigationProps;
};

export const TablePurchaseOrder: React.FC<PagintionProps> = (params) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: PurchaseOrderType) => (
    <S.TableRowBody key={item.id}>
      <S.TableDataBody>{item.id}</S.TableDataBody>
      <S.TableDataBody>{item.fuelType}</S.TableDataBody>
      <S.TableDataBody>{item.paymentType}</S.TableDataBody>
      <S.TableDataBody>{item.qtdLiters}</S.TableDataBody>
      <S.TableDataBody>{item.totalPrice}</S.TableDataBody>
      <S.TableDataBody>{item.status}</S.TableDataBody>
      <S.TableDataBodyIcon>
        <Eye title="Detalhes" onClick={() => params.functions.Details(item)} />
        <Cancel title="Cancelar" onClick={() => params.functions.Cancel(item.id)} />
      </S.TableDataBodyIcon>
    </S.TableRowBody>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{params.purchaseOrder.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
