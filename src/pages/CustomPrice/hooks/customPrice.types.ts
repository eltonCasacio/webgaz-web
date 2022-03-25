import { CustomPriceType } from "../../../domain/types";

export type HookList = () => () => Promise<Array<CustomPriceType>>;

export type CreateCustomPriceFunction = (customPrice: CustomPriceType) => Promise<void>;
export type HookSave = () => CreateCustomPriceFunction;