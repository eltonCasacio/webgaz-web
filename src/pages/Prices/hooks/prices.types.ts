import { SupplierPricesType } from "../../../domain/types";

export type HookList = () => () => Promise<Array<SupplierPricesType>>;

export type CreatePriceFunction = (price: SupplierPricesType) => Promise<void>;
export type HookSave = () => CreatePriceFunction;