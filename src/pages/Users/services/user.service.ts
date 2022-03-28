import API from "../../../srvices/api"
import { UserType } from "../../../domain/types";

const listUsersService = async (): Promise<Array<UserType>> => {
  const { data } = await API.get("user-adm");
  return data
}

const createUserService = async (user: UserType): Promise<void> => {
  await API.post("user-adm", user);
}

const updateUserService = async (user: UserType): Promise<void> => {
  await API.put("user-adm", user);
}

const deleteUserService = async (userId: number): Promise<void> => {
  await API.delete(`user-adm/${userId}`);
}

export { listUsersService, createUserService, updateUserService, deleteUserService }