import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { Block, Check } from "styled-icons/boxicons-regular";

import { FuelStationType } from "../../../../domain/types";
import { CrudNavigationProps } from "../../../../domain/types/crudNavigation";

const HEADER = ["Nome", "CNPJ", "Email", "Status", "Telefone", "Ações"];

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
      <S.TableDataBody>{item.status}</S.TableDataBody>
      <S.TableDataBody>{item.telephone}</S.TableDataBody>
      <S.TableDataBodyIcon>
        <Eye color="#ffffffac" onClick={() => params.functions.Details(item)} />
        <Check
          color={item.status === "ACTIVE" ? "#00ff00a7" : "#ffffff7d"}
          onClick={() => params.functions.Active(item.id)}
        />
        <Block
          color={item.status === "BLOCKED" ? "#d64b4b" : "#ffffff7d"}
          onClick={() => params.functions.Cancel(item.id)}
        />
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
