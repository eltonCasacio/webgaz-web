import { useCallback } from "react";
import { listPurchaseOrderService, createPurchaseOrderService } from "../services/purchaseOrder.service";
import { PurchaseOrderType } from "../../../types";
import { HookList, HookSave } from "./purchaseOrder.types";

const useListPurchaseOrders: HookList = () => {
  return useCallback(
    () => {
      return listPurchaseOrderService();
    },
    []
  );
};

const useCreatePurchaseOrder: HookSave = () => {
  return useCallback(
    async (purchaseOrder: PurchaseOrderType) => {
      await createPurchaseOrderService(purchaseOrder);
    },
    []
  )
};

export { useListPurchaseOrders, useCreatePurchaseOrder }