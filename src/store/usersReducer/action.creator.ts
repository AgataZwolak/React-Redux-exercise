import { User } from '../../models/user.model';
import { ActionEnum } from './action.enums';
import * as ActionTypes from './action.types';

export const reduxSyncData = (data: User[]): ActionTypes.SyncData => {
  return {
    type: ActionEnum.SYNC_DATA,
    data
  };
};

export const reduxSelectUser = (data: User): ActionTypes.SelectUser => {
  return {
    type: ActionEnum.SELECT_USER,
    data
  };
};

export const reduxSetSearch = (search: string): ActionTypes.SetSearch => {
  return {
    type: ActionEnum.SET_SEARCH,
    search
  };
};

export const reduxAddUser = (data: User): ActionTypes.AddUser => {
  return {
    type: ActionEnum.ADD_USER,
    data
  };
};

export const reduxDeleteUser = (id: string): ActionTypes.DeleteUser => {
  return {
    type: ActionEnum.DELETE_USER,
    id
  };
};

export const reduxUpdateUser = (id: string, data: Partial<User>): ActionTypes.UpdateUser => {
  return {
    type: ActionEnum.UPDATE_USER,
    id,
    data
  };
};