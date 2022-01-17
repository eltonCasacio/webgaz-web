import * as S from "./styles";
import Menu from "../Menu";

type ViewProps = {
  title: string;
};

const View: React.FC<ViewProps> = (props) => (
  <S.Wrapper>
    <S.Logo>Webgaz</S.Logo>
    <Menu />
  </S.Wrapper>
);

export default View;
