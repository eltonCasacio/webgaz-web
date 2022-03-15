import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { ClientType } from "../../../types/client";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState({} as ClientType);

  function cancel() {
    navigate("/clients");
  }

  function confirm() {
    //validar
    //persistir client
    //mostar mensagem Erro/Sucesso
    //navegar para /clients
    console.log("CONFIRMAR NOVO", client);
  }

  function updateFields(name: string, value: string) {
    setClient({ ...client, [name]: value });
  }

  return (
    <View
      type="create"
      title="Cliente"
      subtitle={`Novo`}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Create;
