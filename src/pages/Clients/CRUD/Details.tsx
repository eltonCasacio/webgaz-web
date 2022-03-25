import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClientType } from "../../../domain/types/client";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [client, setClient] = useState({} as ClientType);

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
      title="Dashboard - Cliente"
      subtitle="Detalhes do Cliente"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Details;
