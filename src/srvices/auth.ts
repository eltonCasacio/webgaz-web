import axios from "axios";
import API from "./api";

export type ResponseSignInProps = {
  token: string;
  user: {
    name: string;
  };
};

export type RequestSignInProps = {
  email: string;
  password: string;
};

export async function signin({
  email,
  password,
}: RequestSignInProps): Promise<ResponseSignInProps> {
  try {
    const { data } = await axios.post("/user-adm/signin", { email, password });    
  } catch (error) {
    console.debug("Erro ao tentar realizar o SIGNIN");
  }
  return { token: "token", user: { name: "elton" } };
}
