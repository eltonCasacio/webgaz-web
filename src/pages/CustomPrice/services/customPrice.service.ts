import API from "../../../srvices/api"
import { CustomPriceType } from "../../../types";

const listCustomPriceService = async (): Promise<Array<CustomPriceType>> => {
  const { data } = await API.get("customprice");
  return data
}

const createCustomPriceService = async (customPrice: CustomPriceType): Promise<void> => {
  await API.post("customprice", customPrice);
}

export { listCustomPriceService, createCustomPriceService }