import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";
import { InputSearch } from "../../components";
import { TableConfig } from "./CRUD/TableConfig";
import { ConfigType } from "../../domain/types";
import { CrudNavigationProps } from "../../domain/types/crudNavigation";

export type ViewPropsFunctions = CrudNavigationProps;
export type ViewProps = {
  functions: ViewPropsFunctions;
  InputSearchChange: any;
  filter: string;
  config: ConfigType[];
  totalConfig: number;
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
        <TableConfig config={props.config} functions={props.functions} />
      </S.Table>
    </S.ContentHeader>
  </S.Wrapper>
);

export default View;
