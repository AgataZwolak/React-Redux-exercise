import { User } from '../../models/user.model';
import { ActionEnum } from './action.enums';

export interface SyncData {
  type: ActionEnum.SYNC_DATA;
  data: User[];
}

export interface SelectUser {
  type: ActionEnum.SELECT_USER;
  data: User;
}

export interface SetSearch {
  type: ActionEnum.SET_SEARCH;
  search: string;
}

export interface AddUser {
  type: ActionEnum.ADD_USER;
  data: User;
}

export interface DeleteUser {
  type: ActionEnum.DELETE_USER;
  id: string;
}

export interface UpdateUser {
  type: ActionEnum.UPDATE_USER;
  id: string;
  data: Partial<User>;
}

export type UsersActionType = 
  | SyncData
  | SelectUser
  | SetSearch
  | AddUser
  | DeleteUser
  | UpdateUser