import { useCallback } from "react";
import { listFuelStationService, createFuelStationService } from "../services/fuelstation.service";
import { FuelStationType } from "../../../types";
import { HookList, HookSave } from "./fuelstation.types";

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

export { useListFuelStations, useCreateFuelStation }