import { combineReducers } from 'redux';
import { sharedReducer, volunteersReducer, articlesReducer, newsletterReducer } from './all.reducer';

export const rootReducer = combineReducers({
  sharedReducer,
  volunteersReducer,
  articlesReducer,
  newsletterReducer
});