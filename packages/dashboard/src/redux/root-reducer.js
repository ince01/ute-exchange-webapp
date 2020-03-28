import { combineReducers } from 'redux';
import appReducer from './appReducer';
import languageReducer from './language/slice';
import authReducer from './auth/slice';

export default function createReducer(injectedReducers) {
  const rootReducer = combineReducers({
    app: appReducer,
    language: languageReducer,
    auth: authReducer,
    ...injectedReducers,
  });
  return rootReducer;
}
