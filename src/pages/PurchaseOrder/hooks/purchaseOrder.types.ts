import { PurchaseOrderType } from "../../../types";

export type HookList = () => () => Promise<Array<PurchaseOrderType>>;

export type CreatePurchaseOrderFunction = (purchaseOrder: PurchaseOrderType) => Promise<void>;
export type HookSave = () => CreatePurchaseOrderFunction;