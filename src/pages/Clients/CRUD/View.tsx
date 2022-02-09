import * as S from "./styles";
import Header, { HeaderProps } from "../../../components/header";
import { clientType } from "../../../types/client";

type ViewProps = {
  data?: clientType;
  type: "update" | "details" | "create";
} & HeaderProps;

const View: React.FC<ViewProps> = ({ title, subtitle, data, type }) => (
  <S.Wrapper>
    <Header title={title} subtitle={subtitle} />

    <S.Form>
      <S.Line cols="2fr 1fr">
        <S.LineItem>
          <S.Label htmlFor="client">Cliente</S.Label>
          <S.Input type="text" name="client" id="client" />
        </S.LineItem>
        <S.LineItem>
          <S.Label htmlFor="cnpj">CNPJ</S.Label>
          <S.Input type="text" name="cnpj" id="cnpj" />
        </S.LineItem>
      </S.Line>

      <S.Line cols="2fr 1fr 0.5fr">
        <S.LineItem>
          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input type="text" name="address" id="address" />
        </S.LineItem>

        <S.LineItem>
          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input type="text" name="city" id="city" />
        </S.LineItem>
        <S.LineItem>
          <S.Label htmlFor="uf">Estado</S.Label>
          <S.Input type="text" name="uf" id="uf" />
        </S.LineItem>
      </S.Line>

      <S.Line cols="1fr 1fr">
        <S.LineItem>
          <S.Label htmlFor="celphone">Telefone</S.Label>
          <S.Input type="text" name="celphone" id="celphone" />
        </S.LineItem>

        <S.LineItem>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input type="text" name="email" id="email" />
        </S.LineItem>
      </S.Line>

      <S.Line cols="1fr">
        <S.TextArea name="observation" placeholder="Observação" rows={5} />
      </S.Line>
    </S.Form>
  </S.Wrapper>
);

export default View;
