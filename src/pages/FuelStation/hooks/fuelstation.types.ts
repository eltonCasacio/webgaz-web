import { FuelStationType } from "../../../domain/types";

export type HookList = () => () => Promise<Array<FuelStationType>>;

export type CreateFuelStationFunction = (fuelstation: FuelStationType) => Promise<void>;
export type BlockFuelStationFunction = (fuelStationId: number) => Promise<void>;
export type HookSave = () => CreateFuelStationFunction
export type HookBlock = () => BlockFuelStationFunction;