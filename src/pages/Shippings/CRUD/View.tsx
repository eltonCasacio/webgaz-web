import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { Shipping } from "../../../domain/types/shipping";

type ViewProps = {
  data?: Shipping;
  type: "update" | "details" | "create";
} & HeaderProps;

const View: React.FC<ViewProps> = ({ title, subtitle, data, type }) => (
  <S.Wrapper>
    <Header title={title} subtitle={subtitle} />
  </S.Wrapper>
);

export default View;
