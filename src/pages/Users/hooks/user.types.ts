import { UserType } from "../../../domain/types";

export type HookList = () => () => Promise<Array<UserType>>;

export type CreateUserFunction = (user: UserType) => Promise<void>;
export type DeleteUserFunction = (userId: number) => Promise<void>;
export type HookSave = () => CreateUserFunction;
export type HookDelete = () => DeleteUserFunction;