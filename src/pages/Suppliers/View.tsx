import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch } from "../../components";
import { TableSuppliers } from "./CRUD/TableSuppliers";
import { SuppliersType } from "../../domain/types/suppliers";
import { CrudNavigationProps } from "../../domain/types/crudNavigation";

export type ViewPropsFunctions = CrudNavigationProps;
export type ViewProps = {
  functions: ViewPropsFunctions;
  InputSearchChange: any;
  filter: string;
  suppliers: SuppliersType[];
  totalSuppliers: number;
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
        <TableSuppliers
          suppliers={props.suppliers}
          functions={props.functions}
        />
      </S.Table>
    </S.ContentHeader>
  </S.Wrapper>
);

export default View;
