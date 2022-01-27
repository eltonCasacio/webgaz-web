import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch, TableClients } from "../../components";
import { clientType } from "../../types/client";
import { CrudNavigationProps } from "../../types/crudNavigation";
import { PaginationProps } from "../../types/pagination";

export type ViewPropsFunctions = CrudNavigationProps;

export type ViewProps = {
  functions: ViewPropsFunctions;
  pagination: PaginationProps;
  InputSearchChange: any;
  filter: string;
  clients: clientType[];
  totalClients: number;
  pages: number[];
  currentPage: number;
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
      callback={props.functions.handleUpdate}
    />

    <S.Table>
      <TableClients clients={props.clients} />
    </S.Table>

    <S.Pagination>
      <div>Qtd:{props.totalClients}</div>
      <S.PaginationButton>
        <S.PaginationItem
          onClick={props.pagination.preview}
          show={!(props.currentPage === 1)}
        >
          Voltar
        </S.PaginationItem>
        {props.pages.map((page) => (
          <S.PaginationItem
            key={page}
            onClick={() => props.pagination.goto(page)}
            selected={page === props.currentPage}
          >
            {page}
          </S.PaginationItem>
        ))}
        <S.PaginationItem
          onClick={props.pagination.next}
          show={!(props.currentPage === props.pages.length)}
        >
          Próximo
        </S.PaginationItem>
      </S.PaginationButton>
    </S.Pagination>
  </S.Wrapper>
);

export default View;
