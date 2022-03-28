import { ShippingType } from "../../../domain/types/shipping";

export interface IShippingParam {
  shipping: ShippingType
}

export type HookList = () => () => Promise<Array<ShippingType>>;

export type CreateShippingFunction = (shipping: ShippingType) => Promise<void>;
export type DeleteShippingFunction = (shippingId: number) => Promise<void>;
export type HookSave = () => CreateShippingFunction;
export type HookDelete = () => DeleteShippingFunction;