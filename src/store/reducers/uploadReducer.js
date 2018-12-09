import * as types from 'store/actions/actionTypes';
import initState from 'store/initState';

// // Actions

// export function setFileState (newState = false) {
//   return {
//     type    : FILE_UPLOADED_SUCCESSFULLY,
//     payload : newState
//   };
// }

// export function fileLoadPending () {
//   return {
//     type    : FILE_LOAD_PENDING
//   };
// }

// export function fileUnuploaded (reason = '') {
//   return {
//     type    : FILE_NOT_UPLOADED,
//     payload : reason
//   };
// }

// // Specialized Action Creator

// export const getFile = () => dispatch => {

//   api.getCurrentFile()
//     .then(info => dispatch(fileLoadPending()))
//     // .catch(normalizeFetchReject)
//     .catch(msg => dispatch(fileUnuploaded(msg)));
// };

// ------------------------------------
// Reducer
// ------------------------------------

const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FILE_LOAD_PENDING:
      state = {
        ...state,
        isLoading: true
      };
      break;
    case types.FILE_UPLOADED_SUCCESSFULLY:
      state = {
        ...state,
        isLoading: false,
        isLoaded: true,
        ...action.payload
      };
      break;
    case types.FILE_NOT_UPLOADED:
      state = {
        ...state,
        isLoading: false,
        reason: action.payload
      };
      break;
    default:
  }

  return state;
}

export default uploadReducer;
