import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch, TableClients } from "../../components";
import { clientType } from "../../types/client";
import { CrudNavigationProps } from "../../types/crudNavigation";
import Pagination from "../../components/Pagination";

export type ViewPropsFunctions = CrudNavigationProps;
export type ViewProps = {
  functions: ViewPropsFunctions;
  InputSearchChange: any;
  filter: string;
  clients: clientType[];
  totalClients: number;
  pages: number[];
  currentPage: number;
  setCurrentPage: (value: number) => void;
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

    <Pagination
      limitPage={10}
      pages={props.pages}
      totalItems={props.totalClients}
      currentPage={props.currentPage}
      setCurrentPage={props.setCurrentPage}
    />
  </S.Wrapper>
);

export default View;
