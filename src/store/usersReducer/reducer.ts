import { ActionEnum } from './action.enums';
import { UsersActionType } from './action.types';
import { initialState, UsersState } from './state.model';


const reducer = (state: UsersState = initialState, action: UsersActionType
): UsersState => {
  switch (action.type) {
    case ActionEnum.SYNC_DATA:
      return { ...state, users: action.data, visibleUsers: action.data };
    case ActionEnum.SELECT_USER:
      return { ...state, selectedUser: action.data };
    case ActionEnum.SET_SEARCH:
      return { ...state, visibleUsers: state.users.filter(users => users.name.toLowerCase().includes(action.search.toLowerCase()))}
    case ActionEnum.ADD_USER:
      return { ...state, users: [...state.users, action.data], visibleUsers: [...state.users, action.data]};
    case ActionEnum.DELETE_USER:
      return {...state, users: state.users.filter(users => users.id !== action.id), visibleUsers: state.users.filter(users => users.id !== action.id)};
    case ActionEnum.UPDATE_USER:
      const selectedUser = state.users[Number(action.id) -1];
      selectedUser.username = action.data.username || selectedUser.username;
      selectedUser.email = action.data.email || selectedUser.email;
      return {...state, users: [...state.users], visibleUsers: [...state.users]};
    default:
      return state;
  }
};

export default reducer;