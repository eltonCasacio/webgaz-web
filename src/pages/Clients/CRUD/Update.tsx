import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { clientType } from "../../../types/client";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [client, setClient] = useState<clientType>();

  function cancel() {
    navigate("/clients");
  }

  function confirm() {}

  useEffect(() => {
    setClient(location.state);
  }, [location]);

  return (
    <View
      type="update"
      client={client}
      title="Atualizar"
      subtitle={client?.name}
      cancel={cancel}
      confirm={confirm}
    />
  );
};

export default Update;
