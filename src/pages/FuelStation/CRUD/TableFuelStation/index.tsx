import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { Block } from "styled-icons/boxicons-regular";

import { FuelStationType } from "../../../../domain/types";
import { CrudNavigationProps } from "../../../../domain/types/crudNavigation";

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
        <Eye onClick={() => params.functions.Details(item)} />
        <Edit onClick={() => params.functions.Update(item)} />
        <Block onClick={() => params.functions.Delete(String(item.cnpj))} />
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
