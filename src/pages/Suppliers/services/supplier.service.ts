import API from "../../../srvices/api"
import { SuppliersType } from "../../../domain/types/suppliers";

const listSuppliersService = async (): Promise<Array<SuppliersType>> => {
  const { data } = await API.get("supplier");
  return data
}

const createSupplierService = async (supplier: SuppliersType): Promise<void> => {
  await API.post("supplier", supplier);
}

const deleteSupplierService = async (supplierId: number): Promise<void> => {
  await API.delete(`supplier/${supplierId}`);
}

export { listSuppliersService, createSupplierService, deleteSupplierService }