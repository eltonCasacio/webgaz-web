import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { SuppliersType } from "../../../types/suppliers";
import { Button } from "../../../components";

type ViewProps = {
  suppliers?: SuppliersType;
  type: "update" | "details" | "create";
  cancel: () => void;
  confirm: () => void;
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
          <S.Label htmlFor="client">Cliente</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="client"
            id="client"
            value={props.suppliers?.name}
          />
        </S.LineItem>
        <S.LineItem>
          <S.Label htmlFor="cnpj">CNPJ</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="cnpj"
            id="cnpj"
            value={props.suppliers?.cnpj}
          />
        </S.LineItem>
      </S.Line>

      <S.Line cols="2fr 1fr 0.5fr">
        <S.LineItem>
          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="address"
            id="address"
            value={props.suppliers?.address}
          />
        </S.LineItem>

        <S.LineItem>
          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="city"
            id="city"
            value={props.suppliers?.city}
          />
        </S.LineItem>
        <S.LineItem>
          <S.Label htmlFor="uf">Estado</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="uf"
            id="uf"
            value={props.suppliers?.uf}
          />
        </S.LineItem>
      </S.Line>

      <S.Line cols="1fr 1fr">
        <S.LineItem>
          <S.Label htmlFor="celphone">Telefone</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="celphone"
            id="celphone"
            value={props.suppliers?.phoneNumber}
          />
        </S.LineItem>

        <S.LineItem>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="email"
            id="email"
            value={props.suppliers?.email}
          />
        </S.LineItem>
      </S.Line>

      <S.Line cols="1fr">
        <S.TextArea
          disabled={props.type === "details"}
          name="observation"
          placeholder="Observação"
          rows={5}
          value={props.suppliers?.observation}
        />
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