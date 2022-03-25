import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PurchaseOrderType } from "../../../domain/types";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [suppliers, setSuppliers] = useState({} as PurchaseOrderType);

  function cancel() {
    navigate("/purchaseorder");
  }

  function confirm() {}

  useEffect(() => {
    setSuppliers(location.state);
  }, [location]);

  function updateFields(name: string, value: string) {
    setSuppliers({ ...suppliers, [name]: value });
  }

  return (
    <View
      type="details"
      purchaseOrders={suppliers}
      title="Dashboard - Pedidos"
      subtitle="Detalhes do Pedido"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Details;
