import { ConfigType } from "../../../domain/types";

export type HookList = () => () => Promise<Array<ConfigType>>;

export type CreateConfigFunction = (config: ConfigType) => Promise<void>;
export type HookSave = () => CreateConfigFunction;