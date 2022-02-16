import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { UserType } from "../../../types/user";
import { Button } from "../../../components";

type ViewProps = {
  user?: UserType;
  type: "update" | "details" | "create";
  cancel: () => void;
  confirm: () => void;
  updateFields: (name: string, value: string) => void;
} & HeaderProps;

const View: React.FC<ViewProps> = (props) => (
  <S.Wrapper>
    <Header title={props.title} subtitle={props.subtitle} />

    <S.Sintegra>
      <a href="http://www.sintegra.gov.br/" target={"_blank"} rel="noreferrer">
        http://www.sintegra.gov.br/
      </a>
    </S.Sintegra>

    <S.Form>
      <S.Line cols="2fr 1fr">
        <S.LineItem>
          <S.Label htmlFor="name">Usuario</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="name"
            id="name"
            value={props.user?.name}
            onChange={(e) => props.updateFields(e.target.name, e.target.value)}
          />
        </S.LineItem>
        <S.LineItem>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="email"
            id="email"
            value={props.user?.email}
            onChange={(e) => props.updateFields(e.target.name, e.target.value)}
          />
        </S.LineItem>
      </S.Line>

      <S.Line cols="2fr 1fr 0.5fr">
        <S.LineItem>
          <S.Label htmlFor="phoneNumber">Telefone</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={props.user?.phoneNumber}
            onChange={(e) => props.updateFields(e.target.name, e.target.value)}
          />
        </S.LineItem>
      </S.Line>
    </S.Form>

    <S.WrapperButtons>
      {props.type !== "details" && (
        <Button callback={props.confirm} size="small" children="Confirmar" />
      )}
      <Button
        callback={props.cancel}
        bgColor="#d6d6d6"
        size="small"
        children={props.type !== "details" ? "Cancelar" : "Voltar"}
      />
    </S.WrapperButtons>
  </S.Wrapper>
);

export default View;
