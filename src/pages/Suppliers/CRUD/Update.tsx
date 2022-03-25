import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SuppliersType } from "../../../domain/types/suppliers";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [suppliers, setSuppliers] = useState({} as SuppliersType);

  function cancel() {
    navigate("/suppliers");
  }

  function confirm() {}

  function updateFields(name: string, value: string) {
    setSuppliers({ ...suppliers, [name]: value });
  }

  useEffect(() => {
    setSuppliers(location.state);
  }, [location]);

  return (
    <View
      type="update"
      suppliers={suppliers}
      title="Atualizar"
      subtitle={suppliers?.name}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
