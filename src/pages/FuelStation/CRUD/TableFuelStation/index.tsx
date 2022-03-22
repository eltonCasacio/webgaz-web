import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { FuelStationType } from "../../../../types";
import { CrudNavigationProps } from "../../../../types/crudNavigation";

const HEADER = ["Nome", "CNPJ", "Email", "Telefone", "Cidade", "Ações"];

type PagintionProps = {
  fuelStation: FuelStationType[];
  functions: CrudNavigationProps;
};

export const TableFuelStation: React.FC<PagintionProps> = (params) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: FuelStationType) => (
    <S.TableRowBody key={item.cnpj}>
      <S.TableDataBody>{item.name}</S.TableDataBody>
      <S.TableDataBody>{item.cnpj}</S.TableDataBody>
      <S.TableDataBody>{item.email}</S.TableDataBody>
      <S.TableDataBody>{item.telephone}</S.TableDataBody>
      <S.TableDataBody>{item.city}</S.TableDataBody>
      <S.TableDataBodyIcon>
        <Eye size={15} onClick={() => params.functions.Details(item)} />
        <Edit size={15} onClick={() => params.functions.Update(item)} />
      </S.TableDataBodyIcon>
    </S.TableRowBody>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{params.fuelStation.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
