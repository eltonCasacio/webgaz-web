import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch } from "../../components";
import { TableCustomPrice } from "./CRUD/TableCustomPrice"
import { CustomPriceType } from "../../domain/types";
import { CrudNavigationProps } from "../../domain/types/crudNavigation";

export type ViewPropsFunctions = CrudNavigationProps;
export type ViewProps = {
  functions: ViewPropsFunctions;
  InputSearchChange: any;
  filter: string;
  customPrice: CustomPriceType[];
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
          type="button"
          children="Novo"
          size="medium"
          callback={props.functions.Create}
        />
      </S.FilterWrapper>
      <S.Table>
        <TableCustomPrice
          customPrice={props.customPrice}
          functions={props.functions}
        />
      </S.Table>
    </S.ContentHeader>
  </S.Wrapper>
);

export default View;
