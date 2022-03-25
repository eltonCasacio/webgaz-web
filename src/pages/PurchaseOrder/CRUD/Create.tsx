import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { PurchaseOrderType } from "../../../domain/types";
import { useCreatePurchaseOrder } from "../hooks/purchaseOrder.hook";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [purchaseOrder, setPurchaseOrder] = useState({} as PurchaseOrderType);
  const createPurchaseOrder = useCreatePurchaseOrder();

  function cancel() {
    navigate("/purchaseorder");
  }

  function confirm() {
    createPurchaseOrder(purchaseOrder)
    .then(() => {
      navigate("/purchaseorder");
    })
    .catch((error) => {
      console.log('error', error)
    })
  }  

  function updateFields(name: string, value: string) {
    setPurchaseOrder({ ...purchaseOrder, [name]: value });
  }

  return (
    <View
      type="create"
      title="Dashboard - Pedidos"
      subtitle="Cadastro de Pedidos"
      cancel={cancel}
      confirm={confirm}
      updateFields={updateFields}
    />
  );
};

export default Create;
