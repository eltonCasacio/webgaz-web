import API from "../../../srvices/api"
import { PurchaseOrderType } from "../../../types";

const listPurchaseOrderService = async (): Promise<Array<PurchaseOrderType>> => {
  const { data } = await API.get("purchase-order");
  return data
}

const createPurchaseOrderService = async (purchaseorder: PurchaseOrderType): Promise<void> => {
  await API.post("purchase-order", purchaseorder);
}

const cancelPurchaseOrderService = async (purchaseorderId: number): Promise<void> => {
  await API.put(`purchase-order/cancel/${purchaseorderId}`);
}

export { listPurchaseOrderService, createPurchaseOrderService, cancelPurchaseOrderService }