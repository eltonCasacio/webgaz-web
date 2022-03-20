import View from "./View";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PurchaseOrderType } from "../../../types";

const Update: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;

  const [purchaseOrder, setPurchaseOrder] = useState({} as PurchaseOrderType);

  function cancel() {
    navigate("/purchaseorder");
  }

  function confirm() {}

  function updateFields(name: string, value: string) {
    setPurchaseOrder({ ...purchaseOrder, [name]: value });
  }

  useEffect(() => {
    setPurchaseOrder(location.state);
  }, [location]);

  return (
    <View
      type="update"
      purchaseOrders={purchaseOrder}
      title="Atualizar"
      subtitle={purchaseOrder?.fuelType}
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Update;
