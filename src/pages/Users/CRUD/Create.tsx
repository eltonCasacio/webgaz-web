import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../domain/types/user";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as UserType);

  function cancel() {
    navigate("/users");
  }

  function confirm() {
    console.log("CONFIRMAR NOVO");
  }

  function updateFields(name: string, value: string) {
    setUser({ ...user, [name]: value });
  }

  return (
    <View
      type="create"
      title="Usuário"
      subtitle={`Novo`}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Create;
