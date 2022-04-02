import { useCallback } from "react";
import { listConfigService, updateConfigService } from "../services/config.service";
import { ConfigType } from "../../../domain/types";
import { HookList, HookSave } from "./config.types";

const useListConfig: HookList = () => {
  return useCallback(
    () => {
      return listConfigService();
    },
    []
  );
};

const useUpdateConfig: HookSave = () => {
  return useCallback(
    async (user: ConfigType) => {
      await updateConfigService(user);
    },
    []
  )
};

export { useListConfig, useUpdateConfig }