import API from "../../../srvices/api"
import { FuelStationType } from "../../../domain/types/fuelStation";

const listFuelStationService = async (): Promise<Array<FuelStationType>> => {
  const { data } = await API.get("fuelstation");
  return data
}

const createFuelStationService = async (fuelstation: FuelStationType): Promise<void> => {
  await API.post("fuelstation", fuelstation);
}

export { listFuelStationService, createFuelStationService }