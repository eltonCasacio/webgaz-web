import * as S from "./styles";
import { Link } from "react-router-dom";
import { Input, Button, FormWrapper, ForgotPassword } from "../../components";
import { LockPassword, Mail, User } from "styled-icons/remix-line";

type ViewProps = {
  handleSubmit?: React.FormEventHandler;
  setEmail?: any;
  setPassword?: any;
};

const View: React.FC<ViewProps> = ({ handleSubmit, setEmail, setPassword }) => (
  <S.Form onSubmit={handleSubmit}>
    <S.UserIcon>
      <User />
    </S.UserIcon>
    <FormWrapper>
      <Input
        onInputChange={(text) => setEmail(text)}
        name="email"
        placeholder="email"
        label="Email"
        icon={<Mail />}
      />

      <Input
        onInputChange={(text) => setPassword(text)}
        name="password"
        label="Senha"
        placeholder="senha"
        type={"password"}
        icon={<LockPassword />}
      />
      <S.ForgotPWD>
        <ForgotPassword>
          <Link to={"/forgot-pwd"}>esqueci a senha</Link>
        </ForgotPassword>
      </S.ForgotPWD>

      <S.Submit>
        <Button size="small" fullWidth>
          Login
        </Button>
      </S.Submit>
    </FormWrapper>
  </S.Form>
);

export default View;
