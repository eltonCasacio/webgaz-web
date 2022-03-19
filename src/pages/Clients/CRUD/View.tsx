/* eslint-disable no-restricted-globals */
import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { ClientType } from "../../../types/client";
import { Button } from "../../../components";
import React from "react";

type ViewProps = {
  client?: ClientType;
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
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="name"
              id="client"
              value={props.client?.name}
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
              value={props.client?.cnpj}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
        </S.Line>

        <S.Line cols="2fr 0.72fr">
          <S.LineItem>
            <S.Label htmlFor="email">E-mail</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="email"
              id="email"
              value={props.client?.email}
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
              value={props.client?.phoneNumber}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
        </S.Line>

        <S.Line cols="0.5fr 1fr 2fr 0.5fr">
          <S.LineItem>
            <S.Label htmlFor="cep">Cep</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="cep"
              id="cep"
              value={props.client?.cep}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="city">Cidade</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="city"
              id="city"
              value={props.client?.city}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>

          <S.LineItem>
            <S.Label htmlFor="address">Endereço</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="address"
              id="address"
              value={props.client?.address}
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
              value={props.client?.uf}
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
            value={props.client?.observation}
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
