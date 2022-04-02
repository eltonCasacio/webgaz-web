import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { ConfigType } from "../../../domain/types";
import { Button } from "../../../components";
import { IsActiveList } from "../../../domain/defaultData";

type ViewProps = {
  config?: ConfigType;
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
        <S.Line cols="1fr 1fr">
        <S.LineItem>
            <S.Label htmlFor="blockOrders">Bloquear Pedidos??</S.Label>
            <S.InputSelect
              disabled={props.type === "details"}
              name="blockOrders"
              id="blockOrders"
              value={props.config?.blockOrders}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            >
              <S.InputSelectOption value=""></S.InputSelectOption>
              {IsActiveList.map((status) => (
                <S.InputSelectOption value={status}>
                  {status}
                </S.InputSelectOption>
              ))}
            </S.InputSelect>
          </S.LineItem>
          <S.LineItem>
            <S.Label htmlFor="timeLimitPurchase">Hora Fechamenrp</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="timeLimitPurchase"
              id="timeLimitPurchase"
              value={props.config?.timeLimitPurchase}
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
