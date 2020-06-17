import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {combineReducers} from 'redux';

import {GlobalStateReducer} from './globalStorage/reducer';
const rootReducer = combineReducers({
  GlobalStore:GlobalStateReducer
});

export type MainState = ReturnType<typeof rootReducer>;

const middleware = [thunk];
const middleWareEnhancer = applyMiddleware(...middleware);
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(middleWareEnhancer)
);
export default store;