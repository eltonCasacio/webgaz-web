import { Link } from "react-router-dom";
import { Email } from "@styled-icons/material-outlined";
import { LockPassword } from "@styled-icons/remix-fill";
import { Input, Button, FormWrapper, ForgotPassword } from "../../components";
import * as S from "./styles";

type ViewProps = {
  handleSubmit?: React.FormEventHandler;
  setEmail?: any;
};

const View: React.FC<ViewProps> = ({ handleSubmit, setEmail }) => (
  <S.Wrapper onSubmit={handleSubmit}>
    <S.UserIcon>
      <LockPassword />
    </S.UserIcon>
    Recuperar Senha
    <FormWrapper>
      <Input
        onInputChange={setEmail}
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <S.Submit>
        <Button size="small" fullWidth>
          Enviar
        </Button>
      </S.Submit>
      
      <ForgotPassword>
        <Link to={"/sign-in"}>Voltar</Link>
      </ForgotPassword>
    </FormWrapper>
  </S.Wrapper>
);

export default View;
