import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch } from "../../components";
import {TableClients } from "./CRUD/TableClients";
import { ClientType } from "../../domain/types/client";
import { CrudNavigationProps } from "../../domain/types/crudNavigation";

export type ViewPropsFunctions = CrudNavigationProps;
export type ViewProps = {
  functions: ViewPropsFunctions;
  InputSearchChange: any;
  filter: string;
  clients: ClientType[];
  totalClients: number;
} & HeaderProps;

const View: React.FC<ViewProps> = (props) => (
  <S.Wrapper>
    <Header title={props.title} subtitle={props.subtitle} />

    <S.ContentHeader>
      <S.FilterWrapper>
        <S.Filter>
          <InputSearch
            callback={props.InputSearchChange}
            filter={props.filter}
          />
        </S.Filter>
        <Button
          children="Novo"
          size="medium"
          callback={props.functions.Create}
        />
      </S.FilterWrapper>
      <S.Table>
        <TableClients clients={props.clients} functions={props.functions} />
      </S.Table>
    </S.ContentHeader>

  </S.Wrapper>
);

export default View;
