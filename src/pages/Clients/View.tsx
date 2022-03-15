import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch, TableClients } from "../../components";
import { ClientType } from "../../types/client";
import { CrudNavigationProps } from "../../types/crudNavigation";

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
      <InputSearch callback={props.InputSearchChange} filter={props.filter} />
    </S.ContentHeader>
    <Button children="Novo" size="small" callback={props.functions.Create} />

    <S.Table>
      <TableClients clients={props.clients} functions={props.functions} />
    </S.Table>

  </S.Wrapper>
);

export default View;
