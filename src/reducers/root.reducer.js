import { combineReducers } from 'redux';
import { sharedReducer, volunteersReducer } from './all.reducer';

export const rootReducer = combineReducers({
  sharedReducer,
  volunteersReducer,
});