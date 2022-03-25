import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { PurchaseOrderType } from "../../../domain/types";
import { Button } from "../../../components";

type ViewProps = {
  purchaseOrders?: PurchaseOrderType;
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
        Acesse o Sintegra
      </a>
    </S.Sintegra>

    <S.Form>
      <div>
        <S.Line cols="2fr 1fr">
          <S.LineItem>
            <S.Label htmlFor="id">Código</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="id"
              id="id"
              value={props.purchaseOrders?.id}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
          <S.LineItem>
            <S.Label htmlFor="fuelType">Tipo</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="fuelType"
              id="fuelType"
              value={props.purchaseOrders?.fuelType}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
        </S.Line>

        <S.Line cols="2fr 1fr">
          <S.LineItem>
            <S.Label htmlFor="paymentType">Forma Pagamento</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="paymentType"
              id="paymentType"
              value={props.purchaseOrders?.paymentType}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="qtdLiters">Litros</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="qtdLiters"
              id="qtdLiters"
              value={props.purchaseOrders?.qtdLiters?.toString()}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
        </S.Line>

        <S.Line cols="1fr 1fr 1fr">
          <S.LineItem>
            <S.Label htmlFor="totalPrice">Valor Total</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="totalPrice"
              id="totalPrice"
              value={props.purchaseOrders?.totalPrice?.toString()}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="status">Status</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="status"
              id="status"
              value={props.purchaseOrders?.status}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>

        </S.Line>

      </div>
      <S.WrapperButtons>
        {props.type !== "details" && (
          <Button
            callback={props.confirm}
            size="small"
            children="Confirmar"
            bgColor="#64E384"
          />
        )}
        <Button
          callback={props.cancel}
          bgColor="#D57176"
          size="small"
          children={props.type !== "details" ? "Cancelar" : "Voltar"}
        />
      </S.WrapperButtons>
    </S.Form>
  </S.Wrapper>
);

export default View;
