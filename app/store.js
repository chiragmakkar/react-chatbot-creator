import { createStore, combineReducers } from 'redux';
import codeReducer from './containers/CodeEditor/reducer';

const combinedReducer = combineReducers({ code: codeReducer });

export default createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
