import API from "../../../srvices/api"
import { ClientType } from "../../../types/client";

const listClientsService = async (): Promise<Array<ClientType>> => {
  const { data } = await API.get("clients");
  return data
}

export { listClientsService }