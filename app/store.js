import { createStore, combineReducers } from 'redux';
import codeReducer from './containers/CodeEditor/reducer';
import chatReducer from './containers/ChatScreen/reducer';

const combinedReducer = combineReducers({
  code: codeReducer,
  chat: chatReducer,
});

export default createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
