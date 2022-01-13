import { Link } from "react-router-dom";
import * as S from "./styles";

export default function Menu() {
  return (
    <S.Wrapper>
      <Link to={"/"}>Home</Link>
    </S.Wrapper>
  );
}
