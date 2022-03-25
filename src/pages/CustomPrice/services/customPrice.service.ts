import API from "../../../srvices/api"
import { CustomPriceType } from "../../../domain/types";

const listCustomPriceService = async (): Promise<Array<CustomPriceType>> => {
  const { data } = await API.get("custom-price");
  return data
}

const createCustomPriceService = async (customPrice: CustomPriceType): Promise<void> => {
  await API.post("custom-price", customPrice);
}

const updateCustomPriceService = async (customPrice: CustomPriceType): Promise<void> => {
  await API.put("custom-price", customPrice);
}

const deleteCustomPriceService = async (customPriceId: number): Promise<void> => {
  await API.put(`custom-price/${customPriceId}`);
}

export { 
  listCustomPriceService,
  createCustomPriceService,
  updateCustomPriceService,
  deleteCustomPriceService
}