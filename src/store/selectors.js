import { createSelector } from 'reselect';

const harms = state => state.harms;
const words = state => state.words;

export const matchedHarmsSelector = createSelector(
  [ harms, words ],
  (harms, words) => harms.filter(harm => words.includes(harm.title))
);