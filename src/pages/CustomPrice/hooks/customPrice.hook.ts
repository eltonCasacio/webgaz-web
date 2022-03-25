import { useCallback } from "react";
import { listCustomPriceService, createCustomPriceService } from "../services/customPrice.service";
import { CustomPriceType } from "../../../domain/types";
import { HookList, HookSave } from "./customPrice.types";

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

export { useListCustomPrices, useCreateCustomPrice }