import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth";

import { SignOut } from "styled-icons/fluentui-system-regular";
import * as S from "./styles";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const { handleSignout } = useContext(AuthContext);

  const logout = async () => {
    const res = await handleSignout();

    if (res) navigate("sign-in");
  };

  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <S.Title>{title}</S.Title>
        <S.SubTitle>Subtitulo</S.SubTitle>
      </S.WrapperTitle>
      <S.Signout onClick={logout}>
        Sign-out
        <SignOut size={25} />
      </S.Signout>
    </S.Wrapper>
  );
};

export default Header;
