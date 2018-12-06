import * as api from '../api/upload';
import normalizeFetchReject from 'helpers/promises';

// ------------------------------------
// Constants
// ------------------------------------

export const FILE_UPLOADED_SUCCESSFULLY = 'FILE_UPLOADED_SUCCESSFULLY';
export const FILE_NOT_UPLOADED = 'FILE_NOT_UPLOADED';
export const FILE_LOAD_PENDING = 'FILE_LOAD_PENDING';

// Actions

export function setFileState (newState = false) {
  return {
    type    : FILE_UPLOADED_SUCCESSFULLY,
    payload : newState
  };
}

export function fileLoadPending () {
  return {
    type    : FILE_LOAD_PENDING
  };
}

export function fileUnuploaded (reason = '') {
  return {
    type    : FILE_NOT_UPLOADED,
    payload : reason
  };
}

// Specialized Action Creator

export const getFile = () => dispatch => {

  api.getCurrentFile()
    .then(info => dispatch(fileLoadPending()))
    .catch(normalizeFetchReject)
    .catch(msg => dispatch(fileUnuploaded(msg)));
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isLoading: true,
  isLoaded: false,
  reason: ''
};

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case FILE_LOAD_PENDING:
      state = {
        ...state,
        isLoading: true
      };
      break;
    case FILE_UPLOADED_SUCCESSFULLY:
      state = {
        ...state,
        isLoading: false,
        isLoaded: true,
        ...action.payload
      };
      break;
    case FILE_NOT_UPLOADED:
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
