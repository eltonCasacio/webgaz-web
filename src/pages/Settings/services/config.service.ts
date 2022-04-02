import API from "../../../srvices/api"
import { ConfigType } from "../../../domain/types";

const listConfigService = async (): Promise<Array<ConfigType>> => {
  const { data } = await API.get("config");
  return data
}

const updateConfigService = async (user: ConfigType): Promise<void> => {
  await API.put("config", user);
}

export { listConfigService, updateConfigService, }