import { FuelStationType } from "../../../domain/types";

export type HookList = () => () => Promise<Array<FuelStationType>>;

export type CreateFuelStationFunction = (fuelstation: FuelStationType) => Promise<void>;
export type HookSave = () => CreateFuelStationFunction;