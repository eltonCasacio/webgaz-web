import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch } from "../../components";
import { TableUsers } from "./CRUD/TableUsers";
import { UserType } from "../../domain/types/user";
import { CrudNavigationProps } from "../../domain/types/crudNavigation";

export type ViewPropsFunctions = CrudNavigationProps;
export type ViewProps = {
  functions: ViewPropsFunctions;
  InputSearchChange: any;
  filter: string;
  users: UserType[];
  totalUsers: number;
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
        <TableUsers users={props.users} functions={props.functions} />
      </S.Table>
    </S.ContentHeader>
  </S.Wrapper>
);

export default View;
