import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { store } from 'index';
import uploadReducer from './reducers/upload';

export const makeRootReducer = asyncReducers => combineReducers({
  router: routerReducer,
  upload: uploadReducer,
  ...asyncReducers
});

export const injectReducer = ({ key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
