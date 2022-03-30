import { useCallback } from "react";
import { listFuelStationService, createFuelStationService, blockFuelStationService, activeFuelStationService } from "../services/fuelstation.service";
import { FuelStationType } from "../../../domain/types";
import { HookBlock, HookList, HookSave } from "./fuelstation.types";

const useListFuelStations: HookList = () => {
  return useCallback(
    () => {
      return listFuelStationService();
    },
    []
  );
};

const useCreateFuelStation: HookSave = () => {
  return useCallback(
    async (fuelstation: FuelStationType) => {
      await createFuelStationService(fuelstation);
    },
    []
  )
};

const useBlockFuelStation: HookBlock = () => {
  return useCallback(
    async (fuelStationId: number) => {
      await blockFuelStationService(fuelStationId);
    },
    []
  )
};

const useActiveFuelStation: HookBlock = () => {
  return useCallback(
    async (fuelStationId: number) => {
      await activeFuelStationService(fuelStationId);
    },
    []
  )
};

export { useListFuelStations, useCreateFuelStation, useBlockFuelStation, useActiveFuelStation }