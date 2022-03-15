import { useCallback } from "react";
import { listClientsService } from "../services/listClients.service";
import { Hook } from "./listClients.types";

const useListClients: Hook = () => {
  return useCallback(
    () => {
      return listClientsService();
    },
    []
  );
};

export { useListClients }