import * as S from "./styles";
import { Link } from "react-router-dom";
import { Input, Button, FormWrapper, ForgotPassword } from "../../components";
import { LockPassword, Mail } from "styled-icons/remix-line";
import logo from "../../assets/logo.png";

type ViewProps = {
  handleSubmit?: React.FormEventHandler;
  setEmail?: any;
  setPassword?: any;
};

const View: React.FC<ViewProps> = ({ handleSubmit, setEmail, setPassword }) => (
  <S.Form onSubmit={handleSubmit}>
    <S.Image src={logo} alt="" />
    <FormWrapper>
      <S.Input>
        <Input
          onInputChange={(text) => setEmail(text)}
          name="email"
          placeholder=""
          label="Email"
          icon={<Mail />}
        />
      </S.Input>

      <Input
        onInputChange={(text) => setPassword(text)}
        name="password"
        label="Senha"
        placeholder=""
        type={"password"}
        icon={<LockPassword />}
      />
      <S.ForgotPWD>
        <ForgotPassword>
          <Link to={"/forgot-pwd"}>Esqueci a Senha</Link>
        </ForgotPassword>
      </S.ForgotPWD>

      <S.Submit>
        <Button type="submit" size="medium">Entrar</Button>
      </S.Submit>
    </FormWrapper>
  </S.Form>
);

export default View;
