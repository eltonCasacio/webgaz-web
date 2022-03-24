import React, { useEffect, useState } from "react";
import { toast } from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import { PurchaseOrderType } from "../../types";
import { useListPurchaseOrders, useCancelPurchaseOrder } from "./hooks/purchaseOrder.hook";
import View, { ViewPropsFunctions } from "./View";

const PurchaseOrder: React.FC = () => {
  let navigate = useNavigate();
  const [purchaseOrder, setfuelStation] = useState<PurchaseOrderType[]>([]);
  const [filter, setFilter] = useState("");
  const listfuelStation = useListPurchaseOrders();
  const cancelPurchaseOrder = useCancelPurchaseOrder();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/purchaseorder/update", { state: value });
  functions.Details = (value) => navigate("/purchaseorder/details", { state: value });
  functions.Create = () => navigate("/purchaseorder/create");
  functions.Cancel = (id: number) => handleCancelPurchaseOrder(id)

  useEffect(() => {
    handleLoadOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function handleFilter() {
      let auxFilter = filter.toUpperCase();

      const filtered = purchaseOrder.filter((item) => {
        return (
          item.fuelType.toUpperCase().includes(auxFilter) ||
          item.deliveryType.toUpperCase().includes(auxFilter) ||
          item.paymentType.toUpperCase().includes(auxFilter)
        );
      });
      setfuelStation(filtered);
    }
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleLoadOrders = () => {
    listfuelStation().then((purchaseOrder) => {
      setfuelStation(purchaseOrder)
    })    
  }

  const handleCancelPurchaseOrder = (purchaseOrderId: number) => {
    cancelPurchaseOrder(purchaseOrderId).then(() => {
      handleLoadOrders();
      toast.success("Pedido cancelado com sucesso.");
    }).catch(() => {
      toast.error("Erro ao cancelar o pedido.");
    })
  }

  return (
    <View
    title="Dashboard - Pedidos"
    subtitle="Pedidos Cadastrados"
      functions={functions}
      InputSearchChange={setFilter}
      filter={filter}
      purchaseOrder={purchaseOrder}
    /> 
  );
};

export default PurchaseOrder;
