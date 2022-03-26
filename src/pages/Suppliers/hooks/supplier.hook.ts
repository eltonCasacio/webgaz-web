import { useCallback } from "react";
import { listSuppliersService, createSupplierService, deleteSupplierService } from "../services/supplier.service";
import { SuppliersType } from "../../../domain/types";
import { HookDelete, HookList, HookSave } from "./supplier.types";

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

const useDeleteSupplier: HookDelete = () => {
  return useCallback(
    async (supplierId: number) => {
      await deleteSupplierService(supplierId);
    },
    []
  )
};

export { useListSuppliers, useCreateSupplier, useDeleteSupplier }