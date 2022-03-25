import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserType } from "../../../domain/types/user";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [user, setUser] = useState({} as UserType);

  function cancel() {
    navigate("/users");
  }

  function confirm() {}

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
