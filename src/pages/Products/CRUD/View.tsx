import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { Produto } from "../../../types/produto";

type ViewProps = {
  data?: Produto;
  type: "update" | "details" | "create";
} & HeaderProps;

const View: React.FC<ViewProps> = ({ title, subtitle, data, type }) => (
  <S.Wrapper>
    <Header title={title} subtitle={subtitle} />
  </S.Wrapper>
);

export default View;
