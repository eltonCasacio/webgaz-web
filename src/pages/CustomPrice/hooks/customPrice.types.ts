import { CustomPriceType } from "../../../domain/types";

export type HookList = () => () => Promise<Array<CustomPriceType>>;

export type CreateCustomPriceFunction = (customPrice: CustomPriceType) => Promise<void>;
export type DeleteCustomPriceFunction = (customPriceId: number) => Promise<void>;

export type HookSave = () => CreateCustomPriceFunction;
export type HookDelete = () => DeleteCustomPriceFunction;