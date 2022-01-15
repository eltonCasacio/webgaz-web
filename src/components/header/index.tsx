import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth";

import { SignOut } from "styled-icons/fluentui-system-regular";
import * as S from "./styles";

export default function Header() {
  const navigate = useNavigate();
  const { handleSignout } = useContext(AuthContext);

  const logout = async () => {
    const res = await handleSignout();

    if (res) navigate("sign-in");
  };

  return (
    <S.Wrapper>
      {/* <S.Logo alt="Logo" src={Logo} /> */}
      Webgaz
      <S.Signout onClick={logout}>
        Sign-out
        <SignOut size={25} />
      </S.Signout>
    </S.Wrapper>
  );
}
