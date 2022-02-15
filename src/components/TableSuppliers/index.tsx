import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { Suppliers as suppliersType } from "../../types/suppliers";
import { CrudNavigationProps} from "../../types/crudNavigation";

const HEADER = ["Nome", "CNPJ", "Email", "Site", "Telefone", ""];

type PagintionProps = {
  suppliers: suppliersType[];
  functions: CrudNavigationProps
};
export const TableSuppliers: React.FC<PagintionProps> = (params) => {
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
      <S.Tbody>{params.suppliers.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
