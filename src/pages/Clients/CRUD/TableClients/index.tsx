import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { Block } from "styled-icons/boxicons-regular";

import { CrudNavigationProps } from "../../../../domain/types/crudNavigation";
import { ClientType } from "../../../../domain/types/client";

const HEADER = ["codigo", "nome", "cnpj", "contato", "email", "status", ""];

type PagintionProps = {
  clients: ClientType[];
  functions: CrudNavigationProps;
};

export const TableClients: React.FC<PagintionProps> = (params) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: ClientType) => (
    <S.TableRowBody key={item.cnpj}>
      <S.TableDataBody>{item.name}</S.TableDataBody>
      <S.TableDataBody>{item.cnpj}</S.TableDataBody>
      <S.TableDataBody>{item.email}</S.TableDataBody>
      <S.TableDataBody>{item.site}</S.TableDataBody>
      <S.TableDataBodyIcon>
        <Eye onClick={() => params.functions.Details(item)} />
        <Edit onClick={() => params.functions.Update(item)} />
        <Block onClick={() => params.functions.Delete(item.id)} />
      </S.TableDataBodyIcon>
    </S.TableRowBody>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{params.clients.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
