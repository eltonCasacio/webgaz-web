import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import View from "./View";
import { clientType } from "../../../types/client";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [client, setClient] = useState<clientType>({} as clientType);

  function cancel() {
    navigate("/clients");
  }

  function confirm() {
    //validar
    //persistir client
    //mostar mensagem Erro/Sucesso
    //navegar para /clients
  }

  function updateFields(name: string, value: string) {
    console.log("UPDATE FIELDS", name, value);
    setClient({ ...client, [name]: value });
  }

  useEffect(() => {
    setClient(location.state);
  }, [location]);

  return (
    <View
      type="update"
      client={client}
      title="Atualizar"
      subtitle={client?.name}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
