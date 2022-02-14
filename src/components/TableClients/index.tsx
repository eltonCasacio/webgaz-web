import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";

import { clientType } from "../../types/client";

const HEADER = ["Nome", "CNPJ", "Email", "Site", ""];

type PagintionProps = {
  clients: clientType[];
  // eslint-disable-next-line no-empty-pattern
  callback: ({}) => void;
};
export const TableClients: React.FC<PagintionProps> = (params) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: clientType) => (
    <>
      <S.TableRowBody key={item.cnpj}>
        <S.TableDataBody>{item.name}</S.TableDataBody>
        <S.TableDataBody>{item.cnpj}</S.TableDataBody>
        <S.TableDataBody>{item.email}</S.TableDataBody>
        <S.TableDataBody>{item.site}</S.TableDataBody>
        <S.TableDataBodyIcon>
          <Eye size={15} onClick={() => params.callback(item)} />
          <Edit size={15} onClick={() => params.callback(item)} />
        </S.TableDataBodyIcon>
      </S.TableRowBody>
    </>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{params.clients.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
