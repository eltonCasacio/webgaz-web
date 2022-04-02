import View from "./View";
import { toast } from "../../../components/Toast";
import { getMessageError } from "../../../domain/clientError";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConfigType } from "../../../domain/types";
import { useUpdateConfig } from "../hooks/config.hook";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const [config, setConfig] = useState({} as ConfigType);
  const updateConfig = useUpdateConfig();

  function cancel() {
    navigate("/settings");
  }

  function confirm(): void {
    updateConfig(config).then(() => {
      toast.success("Configurações atualizadas com sucesso.");
      navigate("/settings");
    }).catch((error) => {
      toast.error(getMessageError(error));
    })
  }

  function updateFields(name: string, value: string) {
    setConfig({ ...config, [name]: value });
  }

  useEffect(() => {
    setConfig(location.state);
  }, [location]);

  return (
    <View
      type="update"
      config={config}
      title="Atualizar"
      subtitle={config?.blockOrders}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
