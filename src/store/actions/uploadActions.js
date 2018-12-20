import * as types from './actionTypes';

export const findWordsInPhoto = () => ({
  type: types.FIND_WORDS_IN_PHOTO
});

export const findWordsInPhotoSuccess = (words) => ({
  type: types.FIND_WORDS_IN_PHOTO_SUCCESS,
  payload: words
});

export const findWordsInPhotoFailure = (error) => ({
  type: types.FIND_WORDS_IN_PHOTO_FAILURE,
  payload: error
});
