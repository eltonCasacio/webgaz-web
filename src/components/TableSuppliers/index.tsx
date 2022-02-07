import React from "react";
import * as S from "./styles";

import { Suppliers as suppliersType } from "../../types/suppliers";

const HEADER = ["Nome", "CNPJ", "Email", "Site", "Telefone"];

type PagintionProps = {
  suppliers: suppliersType[];
};
export const TableSuppliers: React.FC<PagintionProps> = ({ suppliers }) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: suppliersType) => (
    <>
      <S.TableRowBody key={item.cnpj}>
        <S.TableDataBody>{item.name}</S.TableDataBody>
        <S.TableDataBody>{item.cnpj}</S.TableDataBody>
        <S.TableDataBody>{item.email}</S.TableDataBody>
        <S.TableDataBody>{item.site}</S.TableDataBody>
        <S.TableDataBody>{item.phoneNumber}</S.TableDataBody>
      </S.TableRowBody>
    </>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{suppliers.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
