import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import getSagaInjectors from 'utils/reduxInjectors/sagaInjectors';
import createReducer from './root-reducer';
import authSaga from './auth/saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: createReducer(),
  middleware: middlewares,
});

store.runSaga = sagaMiddleware.run;
store.injectedReducers = {}; // Reducer registry
store.injectedSagas = {}; // Saga registry

// Inject default sagas
const injectors = getSagaInjectors(store);
injectors.injectSaga('auth', { saga: authSaga });

if (module.hot) {
  module.hot.accept('./root-reducer', () => {
    store.replaceReducer(createReducer(store.injectedReducers));
  });
}

export default store;
