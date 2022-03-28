import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { ShippingType } from "../../../domain/types/shipping";
import { Button } from "../../../components";

type ViewProps = {
  shipping?: ShippingType;
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
        <S.Line cols="1fr 0.5fr">
          <S.LineItem>
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="name"
              id="name"
              value={props.shipping?.name}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
          <S.LineItem>
            <S.Label htmlFor="cnpj">CNPJ</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="cnpj"
              id="cnpj"
              value={props.shipping?.cnpj}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
        </S.Line>

        <S.Line cols="1fr 0.5fr 0.5fr">
          <S.LineItem>
            <S.Label htmlFor="email">E-mail</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="email"
              id="email"
              value={props.shipping?.email}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="phoneNumber">Telefone</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={props.shipping?.phoneNumber}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="site">Site</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="site"
              id="site"
              value={props.shipping?.site}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
        </S.Line>

        <S.Line cols="1fr 0.5fr">
          <S.LineItem>
            <S.Label htmlFor="city">Cidade</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="city"
              id="city"
              value={props.shipping?.city}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="uf">UF</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="uf"
              id="uf"
              value={props.shipping?.uf}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
        </S.Line>

        <S.Line cols="1fr">
          <S.LineItem>
            <S.Label htmlFor="address">Endereço</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="address"
              id="address"
              value={props.shipping?.address}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
        </S.Line>

        <S.Line cols="1fr">
          <S.TextArea
            disabled={props.type === "details"}
            name="observation"
            placeholder="Observação"
            rows={5}
            value={props.shipping?.observation}
            onChange={(e) => props.updateFields(e.target.name, e.target.value)}
          />
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
