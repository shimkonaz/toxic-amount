import * as types from 'store/actions/actionTypes';
import initState from 'store/initState';

const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FIND_WORDS_IN_PHOTO:
      return {
        ...state,
        isLoading: true
      };
    
    case types.FIND_WORDS_IN_PHOTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        words: action.payload
      };
    
    case types.FIND_WORDS_IN_PHOTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    
    default: 
      return state;
  }

}

export default uploadReducer;
