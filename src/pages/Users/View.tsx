import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch, TableUsers } from "../../components";
import { UserType } from "../../domain/types/user";
import { CrudNavigationProps } from "../../domain/types/crudNavigation";
import Pagination from "../../components/Pagination";

export type ViewPropsFunctions = CrudNavigationProps;
export type ViewProps = {
  functions: ViewPropsFunctions;
  InputSearchChange: any;
  filter: string;
  users: UserType[];
  totalUsers: number;
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
      <TableUsers users={props.users} functions={props.functions} />
    </S.Table>

    <Pagination
      limitPage={10}
      pages={props.pages}
      totalItems={props.totalUsers}
      currentPage={props.currentPage}
      setCurrentPage={props.setCurrentPage}
    />
  </S.Wrapper>
);

export default View;
