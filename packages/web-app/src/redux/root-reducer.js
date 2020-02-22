import { combineReducers } from 'redux';
import languageReducer from './languageReducer';

export default function createReducer(injectedReducers) {
  const rootReducer = combineReducers({
    language: languageReducer,
    ...injectedReducers,
  });
  return rootReducer;
}
