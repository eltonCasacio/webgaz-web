import React from "react";
import * as S from "./styles";

import { clientType } from "../../types/client";

const HEADER = ["Nome", "CNPJ", "Email", "Site"];

type PagintionProps = {
  clients: clientType[];
};
export const TableClients: React.FC<PagintionProps> = ({ clients }) => {
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
      </S.TableRowBody>
    </>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{clients.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
