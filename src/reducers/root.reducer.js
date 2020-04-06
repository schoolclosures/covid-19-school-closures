import { combineReducers } from 'redux';
import { sharedReducer } from './shared.reducer';

export const rootReducer = combineReducers({
  sharedReducer,
});