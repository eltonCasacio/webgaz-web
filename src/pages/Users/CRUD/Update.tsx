import View from "./View";
import { toast } from "../../../components/Toast";
import { getMessageError } from "../../../domain/clientError";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserType } from "../../../domain/types/user";
import { useUpdateUser } from "../hooks/user.hook";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const [user, setUser] = useState({} as UserType);
  const updateUser = useUpdateUser();

  function cancel() {
    navigate("/users");
  }

  function confirm(): void {
    updateUser(user).then(() => {
      toast.success("Usuário atualizado com sucesso.");
      navigate("/users");
    }).catch((error) => {
      toast.error(getMessageError(error));
    })
  }

  function updateFields(name: string, value: string) {
    setUser({ ...user, [name]: value });
  }

  useEffect(() => {
    setUser(location.state);
  }, [location]);

  return (
    <View
      type="update"
      user={user}
      title="Atualizar"
      subtitle={user?.name}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
