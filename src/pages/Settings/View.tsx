import * as S from "./styles";
import Header, { HeaderProps } from "../../components/header";

type ViewProps = {} & HeaderProps;

const View: React.FC<ViewProps> = ({ title, subtitle }) => (
  <S.Wrapper>
    <Header title={title} subtitle={subtitle} />
  </S.Wrapper>
);

export default View;
