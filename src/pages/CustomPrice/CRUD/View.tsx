import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { CustomPriceType, FuelStationType } from "../../../domain/types";
import { Button } from "../../../components";
import {
  DeliveryTypeList,
  FuelTypeList,
  PaymentTypeList,
} from "../../../domain/defaultData";

type ViewProps = {
  customPrice?: CustomPriceType;
  fuelStation?: FuelStationType[];
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
        <S.Line cols="1fr 1fr 1fr">
          <S.LineItem>
            <S.Label htmlFor="fuelType">Tipo Combustivel</S.Label>
            <S.InputSelect
              disabled={props.type === "details"}
              name="fuelType"
              id="fuelType"
              value={props.customPrice?.fuelType}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            >
              <S.InputSelectOption value=""></S.InputSelectOption>
              {FuelTypeList.map((fuelType) => (
                <S.InputSelectOption value={fuelType}>
                  {fuelType}
                </S.InputSelectOption>
              ))}
            </S.InputSelect>
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="paymentType">Tipo Pagamento</S.Label>
            <S.InputSelect
              disabled={props.type === "details"}
              name="paymentType"
              id="paymentType"
              value={props.customPrice?.paymentType}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            >
              <S.InputSelectOption value=""></S.InputSelectOption>
              {PaymentTypeList.map((paymentType) => (
                <S.InputSelectOption value={paymentType}>
                  {paymentType}
                </S.InputSelectOption>
              ))}
            </S.InputSelect>
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="deliveryType">Tipo Entrega</S.Label>
            <S.InputSelect
              disabled={props.type === "details"}
              name="deliveryType"
              id="deliveryType"
              value={props.customPrice?.deliveryType}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            >
              <S.InputSelectOption value=""></S.InputSelectOption>
              {DeliveryTypeList.map((deliveryType) => (
                <S.InputSelectOption value={deliveryType}>
                  {deliveryType}
                </S.InputSelectOption>
              ))}
            </S.InputSelect>
          </S.LineItem>
        </S.Line>

        <S.Line cols="1fr 1fr 1fr">
          <S.LineItem>
            <S.Label htmlFor="price">Preço Promocional</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="price"
              id="price"
              value={props.customPrice?.price?.toString()}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="fuelStationId">Posto de Combustivel</S.Label>
            <S.InputSelect
              disabled={props.type === "details"}
              name="fuelStationId"
              id="fuelStationId"
              value={props.customPrice?.fuelStationId?.toString()}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            >
              <S.InputSelectOption value=""></S.InputSelectOption>
              {props.fuelStation?.map((fuelStation) => (
                <S.InputSelectOption value={fuelStation.id}>
                  {fuelStation.name}
                </S.InputSelectOption>
              ))}
            </S.InputSelect>
          </S.LineItem>
        </S.Line>
      </div>
      <S.WrapperButtons>
        {props.type !== "details" && (
          <Button
            type="button"
            callback={props.confirm}
            size="small"
            children="Confirmar"
            bgColor="#64E384"
          />
        )}
        <Button
          type="button"
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
