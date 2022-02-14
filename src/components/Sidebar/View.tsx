import * as S from "./styles";
import Menu from "../Menu";
import { Menu as MenuIcon } from "styled-icons/entypo";

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
        <MenuIcon color="white" size={25} />
      </S.ArrowBack>
    </S.Logo>
    <Menu showMenu={showMenu} />
  </S.Wrapper>
);

export default View;
