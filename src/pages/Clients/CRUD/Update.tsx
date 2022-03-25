import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import View from "./View";
import { ClientType } from "../../../domain/types/client";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [client, setClient] = useState<ClientType>({} as ClientType);

  function cancel() {
    navigate("/clients");
  }

  function confirm() {
    alert("Salvar");
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
      title="Dashboard - Cliente"
      subtitle="Atualizar Cadastro do Cliente"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
