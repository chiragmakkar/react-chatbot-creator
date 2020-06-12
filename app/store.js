import { createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import codeReducer from './containers/CodeEditor/reducer';
import chatReducer from './containers/ChatScreen/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const combinedReducer = combineReducers({
  code: codeReducer,
  chat: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
