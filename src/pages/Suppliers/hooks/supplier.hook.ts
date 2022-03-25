import { useCallback } from "react";
import { listSuppliersService, createSupplierService } from "../services/supplier.service";
import { SuppliersType } from "../../../domain/types";
import { HookList, HookSave } from "./supplier.types";

const useListSuppliers: HookList = () => {
  return useCallback(
    () => {
      return listSuppliersService();
    },
    []
  );
};

const useCreateSupplier: HookSave = () => {
  return useCallback(
    async (supplier: SuppliersType) => {
      await createSupplierService(supplier);
    },
    []
  )
};

export { useListSuppliers, useCreateSupplier }