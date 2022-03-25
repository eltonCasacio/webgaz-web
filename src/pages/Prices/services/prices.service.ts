import API from "../../../srvices/api"
import { SupplierPricesType } from "../../../types";

const listPricesService = async (): Promise<Array<SupplierPricesType>> => {
  const { data } = await API.get("supplier-prices");
  return data
}

const createPriceService = async (price: SupplierPricesType): Promise<void> => {
  await API.post("supplier-prices", price);
}

const updatePriceService = async (price: SupplierPricesType): Promise<void> => {
  await API.put("supplier-prices", price);
}

export { listPricesService, createPriceService, updatePriceService }