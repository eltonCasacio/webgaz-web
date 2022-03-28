import { useCallback } from "react";
import { listUsersService, createUserService, updateUserService, deleteUserService } from "../services/user.service";
import { UserType } from "../../../domain/types";
import { HookDelete, HookList, HookSave } from "./user.types";

const useListUsers: HookList = () => {
  return useCallback(
    () => {
      return listUsersService();
    },
    []
  );
};

const useCreateUser: HookSave = () => {
  return useCallback(
    async (user: UserType) => {
      await createUserService(user);
    },
    []
  )
};

const useUpdateUser: HookSave = () => {
  return useCallback(
    async (user: UserType) => {
      await updateUserService(user);
    },
    []
  )
};

const useDeleteUser: HookDelete = () => {
  return useCallback(
    async (priceId: number) => {
      await deleteUserService(priceId);
    },
    []
  )
};

export { useListUsers, useCreateUser, useUpdateUser, useDeleteUser }