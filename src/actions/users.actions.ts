import { User } from '../models/user.model';
import store from '../store/store';
import { reduxAddUser, reduxDeleteUser, reduxSyncData, reduxUpdateUser } from '../store/usersReducer/action.creator';
import * as api from './users.handler';

export const getUsers = async (): Promise<void> => {
  const result = await api.getUsers();
  store.dispatch(reduxSyncData(result || []))
};


export const updateUser = async (id:string, update: Partial<User>): Promise<void> => {
  const result = await api.updateUser(id, update);
  store.dispatch(reduxUpdateUser(id, update))
}

export const deleteUser = async (id: string): Promise<void> => {
  const result = await api.deleteUser(id);
  store.dispatch(reduxDeleteUser(id));
}

export const addUser = async (add: User): Promise<void> => {
  const result = await api.addUser(add);
  store.dispatch(reduxAddUser(add));
}
