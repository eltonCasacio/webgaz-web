import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch, TableClients } from "../../components";
import { Suppliers as suppliersType } from "../../types/suppliers";
import { CrudNavigationProps } from "../../types/crudNavigation";
import Pagination from "../../components/Pagination";

export type ViewPropsFunctions = CrudNavigationProps;

export type ViewProps = {
  functions: ViewPropsFunctions;
  InputSearchChange: any;
  filter: string;
  suppliers: suppliersType[];
  totalSuppliers: number;
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
    <Button
      children="Novo"
      size="small"
      callback={() => props.functions.Update(props.suppliers)}
    />

    <S.Table>
      <TableClients
        clients={props.suppliers}
        callback={props.functions.Details}
      />
    </S.Table>

    <Pagination
      limitPage={10}
      pages={props.pages}
      totalItems={props.totalSuppliers}
      currentPage={props.currentPage}
      setCurrentPage={props.setCurrentPage}
    />
  </S.Wrapper>
);

export default View;
