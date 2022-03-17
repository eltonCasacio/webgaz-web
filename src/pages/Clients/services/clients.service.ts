import API from "../../../srvices/api"
import { ClientType } from "../../../types/client";

const listClientsService = async (): Promise<Array<ClientType>> => {
  const { data } = await API.get("client");
  return data
}

const createClientService = async (client: ClientType): Promise<void> => {
  await API.post("client", client);
}

export { listClientsService, createClientService }