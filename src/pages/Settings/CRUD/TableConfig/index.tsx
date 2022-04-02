import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";

import { ConfigType } from "../../../../domain/types";
import { CrudNavigationProps } from "../../../../domain/types/crudNavigation";

const HEADER = ["Hora Fechamento", "Bloquear pedidos?",  "Ações"];

type PagintionProps = {
  config: ConfigType[];
  functions: CrudNavigationProps;
};

export const TableConfig: React.FC<PagintionProps> = (params) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: ConfigType) => (
    <S.TableRowBody key={item.id}>
      <S.TableDataBody>{item.timeLimitPurchase}</S.TableDataBody>
      <S.TableDataBody>{item.blockOrders}</S.TableDataBody>
      <S.TableDataBodyIcon>
        <Eye onClick={() => params.functions.Details(item)} />
        <Edit onClick={() => params.functions.Update(item)} />
      </S.TableDataBodyIcon>
    </S.TableRowBody>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{params.config.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
