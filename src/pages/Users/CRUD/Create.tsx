import { useState } from "react";
import { toast } from "../../../components/Toast";
import { getMessageError } from "../../../domain/clientError";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../domain/types/user";
import { useCreateUser } from "../hooks/user.hook";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as UserType);
  const createUser = useCreateUser();

  function cancel() {
    navigate("/users");
  }


  function confirm() {
    createUser(user)
    .then(() => {
      toast.success("Usuário cadastrado com sucesso.")
      navigate("/users");
    })
    .catch((error) => {
      toast.error(getMessageError(error));
    })
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
