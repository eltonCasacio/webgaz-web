import * as S from "./styles";
import { IsActiveList } from "../../../domain/defaultData";
import { IsActive } from "../../../domain/types";
import Header, { HeaderProps } from "../../../components/header";
import { UserType } from "../../../domain/types/user";
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
        Acesse o Sintegra
      </a>
    </S.Sintegra>

    <S.Form>
      <div>
        <S.Line cols="1fr 1fr 1fr">
          <S.LineItem>
            <S.Label htmlFor="name">Usuario</S.Label>
            <S.Input
              disabled={props.type === "details"}
              type="text"
              name="name"
              id="name"
              value={props.user?.name}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
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
              value={props.user?.phoneNumber}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            />
          </S.LineItem>
        </S.Line>

        <S.Line cols="1fr 1fr 1fr">
          <S.LineItem>
            <S.Label htmlFor="isActive">Status</S.Label>
            <S.InputSelect
              disabled={props.type === "details"}
              name="isActive"
              id="isActive"
              value={props.user?.isActive}
              onChange={(e) =>
                props.updateFields(e.target.name, e.target.value)
              }
            >
              <S.InputSelectOption value=""></S.InputSelectOption>
              {IsActiveList?.map((status: IsActive) => (
                <S.InputSelectOption value={status}>
                  {status}
                </S.InputSelectOption>
              ))}
            </S.InputSelect>
          </S.LineItem>
          {props.type === "create" &&
            <>
              <S.LineItem>
                <S.Label htmlFor="password">Senha</S.Label>
                <S.Input
                  disabled={false}
                  type="text"
                  name="password"
                  id="password"
                  value={props.user?.password}
                  onChange={(e) =>
                    props.updateFields(e.target.name, e.target.value)
                  }
                />
              </S.LineItem>
              <S.LineItem>
                <S.Label htmlFor="passwordConfirmation">Confirmação Senha</S.Label>
                <S.Input
                  disabled={false}
                  type="text"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  value={props.user?.passwordConfirmation}
                  onChange={(e) =>
                    props.updateFields(e.target.name, e.target.value)
                  }
                />
              </S.LineItem>             
            </>       
          }
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
