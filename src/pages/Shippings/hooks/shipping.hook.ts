import { useCallback } from "react";
import {
  createShippingService,
  deleteShippingService,
  listShippingService,
} from "../services/shipping.service";
import { ShippingType } from "../../../domain/types/shipping";
import { HookDelete, HookList, HookSave } from "./shipping.types";

const useListShipping: HookList = () => {
  return useCallback(() => {
    return listShippingService();
  }, []);
};

const useCreateShipping: HookSave = () => {
  return useCallback(async (shipping: ShippingType) => {
    await createShippingService(shipping);
  }, []);
};

const useDeleteShipping: HookDelete = () => {
  return useCallback(async (shippingId: number) => {
    await deleteShippingService(shippingId);
  }, []);
};

export { useListShipping, useCreateShipping, useDeleteShipping };
