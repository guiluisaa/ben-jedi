import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const initialState = {};
const middleware = [thunk];

const composeOptions = [applyMiddleware(...middleware)];
const reduxDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.ENVIRONMENT !== 'live') composeOptions.push(reduxDevTools);

const persistConfig: PersistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  compose(...composeOptions)
);

const persistor = persistStore(store);

export { store, persistor };
