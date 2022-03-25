import { PaginationProps } from "../../domain/types/pagination";
import * as S from "./styles";

type PaginationParams = {
  totalItems: number;
  limitPage: number;
  pages: number[];
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

const Pagination = (params: PaginationParams) => {
  const pagination = {} as PaginationProps;
  pagination.next = () => params.setCurrentPage(params.currentPage + 1);
  pagination.preview = () => params.setCurrentPage(params.currentPage - 1);
  pagination.goto = (pageNumber) => params.setCurrentPage(pageNumber);

  return (
    <S.Pagination>
      <div>Qtd:{params.pages.length}</div>
      <S.PaginationButton>
        <S.PaginationItem
          onClick={pagination.preview}
          show={!(params.currentPage === 1)}
        >
          Voltar
        </S.PaginationItem>
        {params.pages.map((page: any) => (
          <S.PaginationItem
            key={page}
            onClick={() => pagination.goto(page)}
            selected={page === params.currentPage}
          >
            {page}
          </S.PaginationItem>
        ))}
        <S.PaginationItem
          onClick={pagination.next}
          show={!(params.currentPage === params.pages.length)}
        >
          Próximo
        </S.PaginationItem>
      </S.PaginationButton>
    </S.Pagination>
  );
};

export default Pagination;
