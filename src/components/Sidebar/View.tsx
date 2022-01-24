import * as S from "./styles";
import Menu from "../Menu";
import { ArrowWithCircleLeft, ArrowWithCircleRight } from "styled-icons/entypo";

type ViewProps = {
  title: string;
  setShowMenu: any;
  showMenu: boolean;
};

const View: React.FC<ViewProps> = ({ title, showMenu, setShowMenu }) => (
  <S.Wrapper showMenu={showMenu}>
    <S.Logo>
      <S.TitleLogo showMenu={showMenu}>{title}</S.TitleLogo>

      <S.ArrowBack onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <ArrowWithCircleLeft color="white" size={25} />
        ) : (
          <ArrowWithCircleRight color="white" size={25} />
        )}
      </S.ArrowBack>
    </S.Logo>
    <Menu showMenu={showMenu} />
  </S.Wrapper>
);

export default View;
