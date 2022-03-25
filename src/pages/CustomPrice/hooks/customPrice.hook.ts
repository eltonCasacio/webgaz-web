import { useCallback } from "react";
import { listCustomPriceService, createCustomPriceService, updateCustomPriceService, deleteCustomPriceService } from "../services/customPrice.service";
import { CustomPriceType } from "../../../domain/types";
import { HookDelete, HookList, HookSave } from "./customPrice.types";

const useListCustomPrices: HookList = () => {
  return useCallback(
    () => {
      return listCustomPriceService();
    },
    []
  );
};

const useCreateCustomPrice: HookSave = () => {
  return useCallback(
    async (customPrice: CustomPriceType) => {
      await createCustomPriceService(customPrice);
    },
    []
  )
};

const useUpdateCustomPrice: HookSave = () => {
  return useCallback(
    async (customPrice: CustomPriceType) => {
      await updateCustomPriceService(customPrice);
    },
    []
  )
};

const useDeleteCustomPrice: HookDelete = () => {
  return useCallback(
    async (customPriceId: number) => {
      await deleteCustomPriceService(customPriceId);
    },
    []
  )
};

export {
  useListCustomPrices,
  useCreateCustomPrice,
  useUpdateCustomPrice,
  useDeleteCustomPrice
}