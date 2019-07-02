import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';

const initialState = {};
const middleware = [thunk];

const composeOptions = [applyMiddleware(...middleware)];
const reduxDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.ENVIRONMENT !== 'live') composeOptions.push(reduxDevTools);

const store = createStore(
  rootReducer,
  initialState,
  compose(...composeOptions)
);

export default store;
