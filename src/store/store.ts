import { applyMiddleware, CombinedState, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { ActionType } from './action.types';

import { State } from './state.model';
import reducer from './reducer';

const middlewares: Middleware[] = [thunkMiddleware];

const store: Store<CombinedState<State>, ActionType> = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
