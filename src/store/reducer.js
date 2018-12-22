import { HARMS } from "consts";
import * as actions from './actions';

const initialState = {
  harms: HARMS,
  words: []
}; 

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.FIND_WORDS_IN_PHOTO_SUCCESS:
        return {
          ...state,
          words: action.payload
        };
      
      case actions.FIND_WORDS_IN_PHOTO_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      
      default: 
        return state;
    }
};

export default reducer;
