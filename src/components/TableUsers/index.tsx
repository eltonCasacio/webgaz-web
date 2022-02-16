import React from "react";
import * as S from "./styles";
import { Edit } from "styled-icons/boxicons-regular";
import { Eye } from "styled-icons/bootstrap";
import { UserType} from "../../types/user";
import { CrudNavigationProps } from "../../types/crudNavigation";

const HEADER = ["Nome", "Email", "Telefone", ""];

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
    <>
      <S.TableRowBody key={item.email}>
        <S.TableDataBody>{item.name}</S.TableDataBody>
        <S.TableDataBody>{item.email}</S.TableDataBody>
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
      <S.Tbody>{params.users.map((item) => makeRow(item))}</S.Tbody>
    </S.Table>
  );
};
