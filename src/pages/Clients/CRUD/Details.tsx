import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { clientType } from "../../../types/client";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [client, setClient] = useState({} as clientType);

  function cancel() {
    navigate("/clients");
  }

  function confirm() {}

  function updateFields(name: string, value: string) {
    setClient({ ...client, [name]: value });
  }

  useEffect(() => {
    setClient(location.state);
  }, [location]);

  return (
    <View
      type="details"
      client={client}
      title="Detalhes"
      subtitle={client?.name}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Details;
