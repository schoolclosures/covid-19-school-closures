import { combineReducers } from 'redux';
import { sharedReducer, volunteersReducer, articlesReducer } from './all.reducer';

export const rootReducer = combineReducers({
  sharedReducer,
  volunteersReducer,
  articlesReducer,
});