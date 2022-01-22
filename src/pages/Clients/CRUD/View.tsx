import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { clientType } from "../../../types/client";

type ViewProps = {
  data?: clientType;
  type: "update" | "details" | "create";
} & HeaderProps;

const View: React.FC<ViewProps> = ({ title, subtitle, data, type }) => (
  <S.Wrapper>
    <Header title={title} subtitle={subtitle} />
  </S.Wrapper>
);

export default View;
