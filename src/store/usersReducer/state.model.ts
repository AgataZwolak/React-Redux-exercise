import { User } from "../../models/user.model";

export interface UsersState  {
  users: User[];
  visibleUsers: User[];
  selectedUser: User | null;
  search: string;
}

export const initialState: UsersState = {
  users: [],
  visibleUsers: [],
  selectedUser: null,
  search: ''
}