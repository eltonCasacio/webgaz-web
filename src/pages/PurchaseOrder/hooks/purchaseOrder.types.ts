import { PurchaseOrderType } from "../../../domain/types";

export type HookList = () => () => Promise<Array<PurchaseOrderType>>;

export type CreatePurchaseOrderFunction = (purchaseOrder: PurchaseOrderType) => Promise<void>;
export type CancelPurchaseOrderFunction = (purchaseOrderId: number) => Promise<void>;
export type HookSave = () => CreatePurchaseOrderFunction;
export type HookCancel = () => CancelPurchaseOrderFunction;