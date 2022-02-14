import View from "./View";
import { useNavigate } from "react-router-dom";

const Update: React.FC = () => {
  const navigate = useNavigate();

  function cancel() {
    navigate("/clients");
  }

  function confirm() {
    console.log("CONFIRMAR NOVO");
  }



  return (
    <View
      type="create"
      title="Cliente"
      subtitle={`Novo`}
      cancel={cancel}
      confirm={confirm}
    />
  );
};

export default Update;
