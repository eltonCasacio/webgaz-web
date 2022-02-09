import React from "react";
import * as S from "./styles";

import { User as userType } from "../../types/user";

const HEADER = ["Nome", "Email", "Telefone"];

type PagintionProps = {
  users: userType[];
};
export const TableUsers: React.FC<PagintionProps> = ({ users }) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: userType) => (
    <>
      <S.TableRowBody key={item.email}>
        <S.TableDataBody>{item.name}</S.TableDataBody>
        <S.TableDataBody>{item.email}</S.TableDataBody>
        <S.TableDataBody>{item.phone}</S.TableDataBody>
      </S.TableRowBody>
    </>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{users.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
