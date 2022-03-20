import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { Button, InputSearch, TablePurchaseOrder } from "../../components";
import { PurchaseOrderType } from "../../types";
import { CrudNavigationProps } from "../../types/crudNavigation";

export type ViewPropsFunctions = CrudNavigationProps;
export type ViewProps = {
  functions: ViewPropsFunctions;
  InputSearchChange: any;
  filter: string;
  purchaseOrder: PurchaseOrderType[];
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
      </S.FilterWrapper>
      <S.Table>
        <TablePurchaseOrder
          purchaseOrder={props.purchaseOrder}
          functions={props.functions}
        />
      </S.Table>
    </S.ContentHeader>
  </S.Wrapper>
);

export default View;
