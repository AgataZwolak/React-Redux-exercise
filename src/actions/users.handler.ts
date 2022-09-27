import { User } from '../models/user.model';
import { apiDelete, apiGet, apiPost, apiPut } from '../utils/api/methods';

/** Retrieves Users */
export const getUsers = async (): Promise<User[] | undefined> => {
  try {
    const response = await apiGet<User[]>('/users', {});
    return response.data;
  } catch (error) {};
};

/** Edits a User */
export const updateUser = async (id: string, update: Partial<User>): Promise<User | undefined> => {
  try {
    const response = await apiPut<Partial<User>, User>('/users/' + id, update);
    return response.data;
  } catch (error) {};
};

/** Adds a User */
export const addUser = async (add: User): Promise<User | undefined> => {
  try {
    const response = await apiPost<Partial<User>, User>('/users/', add);
    return response.data;
  } catch (error) {};
};

/** Deletes a User */
export const deleteUser = async (id: string): Promise<boolean | undefined> => {
  try {
    const response = await apiDelete<undefined>('/users/' + id);
    return true;
  } catch (error) {};
};
