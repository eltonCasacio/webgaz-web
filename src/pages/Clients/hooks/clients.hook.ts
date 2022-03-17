import { useCallback } from "react";
import { listClientsService, createClientService } from "../services/clients.service";
import { HookList, HookSave, IClientParam } from "./clients.types";

const useListClients: HookList = () => {
  return useCallback(
    () => {
      return listClientsService();
    },
    []
  );
};

const useCreateClients: HookSave = () => {
  return useCallback(
    async ({ client }: IClientParam) => {
      await createClientService(client);
    },
    []
  )
};

export { useListClients, useCreateClients }