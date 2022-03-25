export type Error = {
  name: string
  message: string
};

export const MenssageErrors: Error[] = [
  { name: "DuplicateRecordError", message: "Registro duplicado." },
  { name: "InvalidParamError", message: "Campos inválidos." },
  { name: "MissingParamError", message: "Campos obrigatórios não preenchidos." },
  { name: "Unauthorized", message: "Usuário não autenticado." },
];

export const getMessageError = (serverError: any): string => {
  const errorName = serverError.response?.data?.name; 
  const clientError: Error[] = MenssageErrors.filter((error) => error.name === errorName);

  if(!clientError.length) {
    return "Error ao realizar a operação"; 
  }
  return clientError[0].message;
}