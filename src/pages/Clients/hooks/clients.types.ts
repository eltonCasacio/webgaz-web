import { ClientType } from "../../../types";

export interface IClientParam {
  client: ClientType
}

export type HookList = () => () => Promise<Array<ClientType>>;

export type CreateClientFunction = ({ client }: IClientParam) => Promise<void>;
export type HookSave = () => CreateClientFunction;