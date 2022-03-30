import API from "../../../srvices/api"
import { FuelStationType } from "../../../domain/types/fuelStation";

const listFuelStationService = async (): Promise<Array<FuelStationType>> => {
  const { data } = await API.get("fuelstation");
  return data
}

const createFuelStationService = async (fuelstation: FuelStationType): Promise<void> => {
  await API.post("fuelstation", fuelstation);
}

const blockFuelStationService = async (fuelStationId: number): Promise<void> => {
  await API.patch(`/fuelstation/block/${fuelStationId}`);
}

const activeFuelStationService = async (fuelStationId: number): Promise<void> => {
  await API.patch(`/fuelstation/active/${fuelStationId}`);
}

export { listFuelStationService, createFuelStationService, blockFuelStationService, activeFuelStationService }