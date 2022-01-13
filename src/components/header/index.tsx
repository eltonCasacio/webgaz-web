import { SignOut } from "styled-icons/fluentui-system-regular";
import Logo from "../../assets/logo.png";
import * as S from "./styles";

export default function Header() {

  return (
    <S.Wrapper>
      <S.Logo alt="Logo" src={Logo} />
      <S.Signout>
        Sign-out
        <SignOut size={25} />
      </S.Signout>
    </S.Wrapper>
  );
}
