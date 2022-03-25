import { useCallback } from "react";
import { listPurchaseOrderService, createPurchaseOrderService, cancelPurchaseOrderService } from "../services/purchaseOrder.service";
import { PurchaseOrderType } from "../../../domain/types";
import { HookList, HookSave, HookCancel } from "./purchaseOrder.types";

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

const useCancelPurchaseOrder: HookCancel = () => {
  return useCallback(
    async (purchaseOrderId: number) => {
      await cancelPurchaseOrderService(purchaseOrderId);
    },
    []
  )
};

export { useListPurchaseOrders, useCreatePurchaseOrder, useCancelPurchaseOrder }