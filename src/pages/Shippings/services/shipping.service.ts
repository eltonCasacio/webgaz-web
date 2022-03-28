import API from "../../../srvices/api";
import { ShippingType } from "../../../domain/types/shipping";

const listShippingService = async (): Promise<Array<ShippingType >> => {
  const { data } = await API.get("shipping");
  return data;
};

const createShippingService = async (
  shipping: ShippingType 
): Promise<void> => {
  await API.post("shipping", shipping);
};

const deleteShippingService = async (shippingId: number): Promise<void> => {
  await API.delete(`shipping/${shippingId}`);
};

export { listShippingService, createShippingService, deleteShippingService };
