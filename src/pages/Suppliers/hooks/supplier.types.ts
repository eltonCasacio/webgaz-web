import { SuppliersType } from "../../../domain/types";

export interface ISupplierParam {
  supplier: SuppliersType
}

export type HookList = () => () => Promise<Array<SuppliersType>>;

export type CreateSupplierFunction = (supplier: SuppliersType) => Promise<void>;
export type HookSave = () => CreateSupplierFunction;