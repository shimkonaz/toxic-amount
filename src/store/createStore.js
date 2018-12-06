import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import createRootReducer from './createRootReducer';
import loggerMiddleware from './loggerMiddleware';
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  // eslint-disable-next-line
  const devMiddleware = process.env.NODE_ENV === 'development'
    ? [loggerMiddleware]
    : [];
  const middleware = [thunk, routerMiddleware(history), ...devMiddleware];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  let composeEnhancers = compose;

  // eslint-disable-next-line
  if (process.env.NODE_ENV === 'development') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (typeof composeWithDevToolsExtension === 'function')
      composeEnhancers = composeWithDevToolsExtension;
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  if (module.hot)
    module.hot.accept('./createRootReducer', () => {
      const reducers = require('./createRootReducer').default; // eslint-disable-line global-require

      store.replaceReducer(reducers(store.asyncReducers));
    });


  return store;
};
