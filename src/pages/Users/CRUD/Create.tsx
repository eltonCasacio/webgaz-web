import View from "./View";
import { useNavigate } from "react-router-dom";

const Create: React.FC = () => {
  const navigate = useNavigate();

  function cancel() {
    navigate("/users");
  }

  function confirm() {
    console.log("CONFIRMAR NOVO");
  }



  return (
    <View
      type="create"
      title="Usuário"
      subtitle={`Novo`}
      cancel={cancel}
      confirm={confirm}
    />
  );
};

export default Create;
