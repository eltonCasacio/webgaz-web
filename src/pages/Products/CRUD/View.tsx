import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { ProductType } from "../../../types/product";
import { Button } from "../../../components";

type ViewProps = {
  product?: ProductType;
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
          <S.Label htmlFor="suppliers">Fornecedor</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="suppliers"
            id="suppliers"
            value={props.product?.suppliers}
          />
        </S.LineItem>
        <S.LineItem>
          <S.Label htmlFor="type">Tipo</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="type"
            id="type"
            value={props.product?.type}
          />
        </S.LineItem>
      </S.Line>

      <S.Line cols="2fr 1fr 0.5fr">
        <S.LineItem>
          <S.Label htmlFor="liters">Litros</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="liters"
            id="liters"
            value={props.product?.liters}
          />
        </S.LineItem>

        <S.LineItem>
          <S.Label htmlFor="price">Preço</S.Label>
          <S.Input
            disabled={props.type === "details"}
            type="text"
            name="price"
            id="price"
            value={props?.product?.price}
          />
        </S.LineItem>
       
      </S.Line>

     

      <S.Line cols="1fr">
        <S.TextArea
          disabled={props.type === "details"}
          name="observation"
          placeholder="Observação"
          rows={5}
          value={props.product?.observation}
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
