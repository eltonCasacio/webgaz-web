import * as S from "./styles";

export type ViewProps = {
  handleSubmit: React.ReactEventHandler;
  nameRef: any;
  emailRef: any;
  passwordRef: any;
};

const SignUp: React.FC<ViewProps> = (props) => (
  <S.Form onSubmit={props.handleSubmit}>
    <S.FormInputs>
      <S.Label>
        Name:
        <S.Input type="text" name="name" id="name" ref={props.nameRef} />
      </S.Label>
      <S.Label>
        Email:
        <S.Input type="text" name="email" id="email" ref={props.emailRef} />
      </S.Label>

      <S.Label>
        Password:
        <S.Input
          type="password"
          name="password"
          id="password"
          ref={props.passwordRef}
        />
      </S.Label>
    </S.FormInputs>
    <S.Submit type="submit" value="Create" />
  </S.Form>
);

export default SignUp;
