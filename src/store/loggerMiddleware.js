/* eslint-disable no-console */

export default store =>
  next => action => {
    console.log('ACTION: ', action);
    const returnValue = next(action);

    console.log('UPDATED STATE: ', store.getState());
    return returnValue;
  };
