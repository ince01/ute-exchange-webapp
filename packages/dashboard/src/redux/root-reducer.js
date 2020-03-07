import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import appReducer from './appReducer';

export default function createReducer(injectedReducers) {
  const rootReducer = combineReducers({
    app: appReducer,
    language: languageReducer,
    ...injectedReducers,
  });
  return rootReducer;
}
