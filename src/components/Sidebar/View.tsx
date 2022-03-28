import * as S from "./styles";
import Menu from "../Menu";
import { Menu as MenuIcon } from "styled-icons/entypo";
import Logo from "../../assets/logo.png";

type ViewProps = {
  title: string;
  setShowMenu: any;
  showMenu: boolean;
};

const View: React.FC<ViewProps> = ({ title, showMenu, setShowMenu }) => (
  <S.Wrapper showMenu={showMenu}>
    {showMenu && <S.LogoImage src={Logo} />}
    <S.ArrowBack showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
      <MenuIcon color="white" size={30} />
    </S.ArrowBack>
    <Menu showMenu={showMenu} />

    {showMenu && <S.Footer>webgaz</S.Footer>}
  </S.Wrapper>
);

export default View;
