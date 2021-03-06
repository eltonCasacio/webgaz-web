import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { ClientType } from "../../../domain/types/client";
import { useCreateClients } from "../hooks/clients.hook";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState({} as ClientType);
  const createClient = useCreateClients();

  function cancel() {
    navigate("/clients");
  }

  function confirm() {
    createClient({ client })
    .then((response) => {
      navigate("/clients");
    })
    .catch((error) => {
      alert("Deu error");
    })
  }

  function updateFields(name: string, value: string) {
    setClient({ ...client, [name]: value });
  }

  return (
    <View
      type="create"
      title="Dashboard - Cliente"
      subtitle="Cadastro de Cliente"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Create;
