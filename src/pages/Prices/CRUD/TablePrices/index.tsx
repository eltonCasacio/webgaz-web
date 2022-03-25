import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { CrudNavigationProps } from "../../../../domain/types/crudNavigation";
import { SupplierPricesType } from "../../../../domain/types";

const HEADER = ["Tipo Combustivel", "Tipo Entrega", "Forma de Pagamento", "Preço Compra", "Preço Venda", "Fornecedor",  "Ações"];

type PagintionProps = {
  prices: SupplierPricesType[];
  functions: CrudNavigationProps;
};

export const TablePrices: React.FC<PagintionProps> = (params) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: SupplierPricesType) => (
    <>
      <S.TableRowBody key={item.id}>
        <S.TableDataBody>{item.fuelType}</S.TableDataBody>
        <S.TableDataBody>{item.deliveryType}</S.TableDataBody>
        <S.TableDataBody>{item.paymentType}</S.TableDataBody>
        <S.TableDataBody>{item.purchasePrice}</S.TableDataBody>
        <S.TableDataBody>{item.salesPrice}</S.TableDataBody>
        <S.TableDataBody>{item.supplierId}</S.TableDataBody>
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
      <S.Tbody>{params.prices.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
