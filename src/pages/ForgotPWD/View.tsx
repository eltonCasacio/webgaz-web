import { Link } from "react-router-dom";
import { Email } from "@styled-icons/material-outlined";
import { LockPassword } from "@styled-icons/remix-fill";
import { Input, Button, FormWrapper, ForgotPassword } from "../../components";
import * as S from "./styles";

type ViewProps = {
  handleSubmit?: React.FormEventHandler;
  setEmail?: any;
  callback: () => void;
};

const View: React.FC<ViewProps> = ({ handleSubmit, setEmail, callback }) => (
  <S.Wrapper onSubmit={handleSubmit}>
    <S.UserIcon>
      <LockPassword />
    </S.UserIcon>
    <FormWrapper>
      <Input
        onInputChange={setEmail}
        name="email"
        placeholder=""
        label="Email"
        type="email"
        icon={<Email />}
      />
      <S.MessageInfo>Uma nova senha será enviada para seu email</S.MessageInfo>
      <S.Submit>
        <Button size="medium" callback={callback}>
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
