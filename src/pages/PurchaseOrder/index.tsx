import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View, { ViewPropsFunctions } from "./View";
import { PurchaseOrderType } from "../../types";
import { useListPurchaseOrders } from "./hooks/purchaseOrder.hook";

const PurchaseOrder: React.FC = () => {
  let navigate = useNavigate();
  const [purchaseOrder, setfuelStation] = useState<PurchaseOrderType[]>([]);
  const [filter, setFilter] = useState("");
  const listfuelStation = useListPurchaseOrders();

  const functions = {} as ViewPropsFunctions;
  functions.Update = (value) => navigate("/purchaseorder/update", { state: value });
  functions.Details = (value) => navigate("/purchaseorder/details", { state: value });
  functions.Create = () => navigate("/purchaseorder/create");

  useEffect(() => {
    listfuelStation().then((purchaseOrder) => {
      setfuelStation(purchaseOrder)
    })
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
