import View from "./View";
import { useNavigate } from "react-router-dom";
import { Client } from "../../../mocks/Client";

const Update: React.FC = () => {
  const navigate = useNavigate();

  function cancel() {
    navigate("/clients");
  }

  function confirm() {
    console.log("CONFIRMAR UPDATE");
  }

  return (
    <View
      type="update"
      client={Client}
      title="Atualizar"
      subtitle={` Dados do Cliente ${Client.name}`}
      cancel={cancel}
      confirm={confirm}
    />
  );
};

export default Update;
