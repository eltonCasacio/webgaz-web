import { ClientType } from "../../../types";

export type Hook = () => () => Promise<Array<ClientType>>;