/* global */

import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

// let composeEnhancers = compose;

// if (__DEV__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

export default { store, persistor };
