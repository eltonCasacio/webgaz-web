import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConfigType } from "../../../domain/types";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [config, setConfig] = useState({} as ConfigType);

  function cancel() {
    navigate("/settings");
  }

  function confirm() {}

  function updateFields(name: string, value: string) {
    setConfig({ ...config, [name]: value });
  }

  useEffect(() => {
    setConfig(location.state);
  }, [location]);

  return (
    <View
      type="details"
      config={config}
      title="Detalhes"
      subtitle={config?.blockOrders}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Details;
