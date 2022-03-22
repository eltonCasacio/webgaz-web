import { CustomPriceType } from "../../../types";

export type HookList = () => () => Promise<Array<CustomPriceType>>;

export type CreateCustomPriceFunction = (customPrice: CustomPriceType) => Promise<void>;
export type HookSave = () => CreateCustomPriceFunction;