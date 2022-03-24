import { useCallback } from "react";
import { listPricesService, createPriceService } from "../services/prices.service";
import { SupplierPricesType } from "../../../types";
import { HookList, HookSave } from "./prices.types";

const useListPrices: HookList = () => {
  return useCallback(
    () => {
      return listPricesService();
    },
    []
  );
};

const useCreatePrice: HookSave = () => {
  return useCallback(
    async (price: SupplierPricesType) => {
      await createPriceService(price);
    },
    []
  )
};

export { useListPrices, useCreatePrice }