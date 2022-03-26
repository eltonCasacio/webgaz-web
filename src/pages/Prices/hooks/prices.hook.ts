import { useCallback } from "react";
import { listPricesService, createPriceService, updatePriceService, deletePriceService } from "../services/prices.service";
import { SupplierPricesType } from "../../../domain/types";
import { HookDelete, HookList, HookSave } from "./prices.types";

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

const useUpdatePrice: HookSave = () => {
  return useCallback(
    async (price: SupplierPricesType) => {
      await updatePriceService(price);
    },
    []
  )
};

const useDeletePrice: HookDelete = () => {
  return useCallback(
    async (priceId: number) => {
      await deletePriceService(priceId);
    },
    []
  )
};

export { useListPrices, useCreatePrice, useUpdatePrice, useDeletePrice }