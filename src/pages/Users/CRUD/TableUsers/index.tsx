import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { Block } from "styled-icons/boxicons-regular";

import { UserType } from "../../../../domain/types/user";
import { CrudNavigationProps } from "../../../../domain/types/crudNavigation";

const HEADER = ["Nome", "Email", "Telefone", "Ações"];

type PagintionProps = {
  users: UserType[];
  functions: CrudNavigationProps;
};

export const TableUsers: React.FC<PagintionProps> = (params) => {
  const makeHeader = () => (
    <S.TableRowHeader>
      {HEADER.map((item) => (
        <S.TableDataHeader key={item}>{item}</S.TableDataHeader>
      ))}
    </S.TableRowHeader>
  );

  const makeRow = (item: UserType) => (
    <S.TableRowBody key={item.email}>
      <S.TableDataBody>{item.name}</S.TableDataBody>
      <S.TableDataBody>{item.email}</S.TableDataBody>
      <S.TableDataBody>{item.phoneNumber}</S.TableDataBody>
      <S.TableDataBodyIcon>
        <Eye color="#ffffffcc" onClick={() => params.functions.Details(item)} />
        <Edit color="#ffffffa0" onClick={() => params.functions.Update(item)} />
        <Block
          color={item.isActive ? "#00ff00a7" : "#ff00007d"}
          onClick={() => params.functions.Delete(Number(item.id))}
        />
      </S.TableDataBodyIcon>
    </S.TableRowBody>
  );

  return (
    <S.Table>
      <S.Thead>{makeHeader()}</S.Thead>
      <S.Tbody>{params.users.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
