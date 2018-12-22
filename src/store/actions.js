export const FIND_WORDS_IN_PHOTO_SUCCESS = 'FIND WORDS IN PHOTO SUCCESS';
export const FIND_WORDS_IN_PHOTO_FAILURE = 'FIND WORDS IN PHOTO FAILURE';

export const findWordsInPhotoSuccess = (words) => ({
  type: FIND_WORDS_IN_PHOTO_SUCCESS,
  payload: words
});

export const findWordsInPhotoFailure = (error) => ({
  type: FIND_WORDS_IN_PHOTO_FAILURE,
  payload: error
});
