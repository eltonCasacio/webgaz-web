import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserType } from "../../../types/user";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [user, setUser] = useState<UserType>();

  function cancel() {
    navigate("/users");
  }

  function confirm() {}

  useEffect(() => {
    setUser(location.state);
  }, [location]);

  return (
    <View
      type="details"
      user={user}
      title="Detalhes"
      subtitle={user?.name}
      cancel={cancel}
      confirm={confirm}
    />
  );
};

export default Details;
