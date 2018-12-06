export function normalizeFetchReject (err) {
  if (err.response) {
    const { data: { message: reason }, status, statusText } = err.response;

    return Promise.reject(`Error "${statusText}" (${status}): ${reason}`); // eslint-disable-line
  }
  return Promise.reject(err.toString());
}

export const asyncActionFactory = (apiFunc, pendingAction, fullfilledAction, rejectedAction, section) =>
  (...args) => dispatch => {
    dispatch(pendingAction(section));
    apiFunc(...args)
      .then(data => dispatch(fullfilledAction(data, ...args, section)))
      .catch(normalizeFetchReject)
      .catch(msg => dispatch(rejectedAction(msg, section)));
  };

export default normalizeFetchReject;
