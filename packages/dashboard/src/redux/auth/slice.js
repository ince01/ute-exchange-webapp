/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import { fetchActionCreator } from 'utils/redux';

export const actions = {
  checkAuth: fetchActionCreator('auth/CHECK'),
  signIn: fetchActionCreator('auth/SIGN_IN'),
  signOut: createAction('auth/SIGN_OUT'),
};

const initialState = {
  loading: false,
  authenticated: false,
};

export default createReducer(initialState, {
  [actions.checkAuth.request]: state => {
    state.loading = true;
  },
  [actions.checkAuth.success]: (state, action) => {
    state.loading = false;
    state.authenticated = true;
    state.user = action.payload;
  },
  [actions.checkAuth.error]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [actions.signIn.request]: state => {
    state.loading = true;
  },
  [actions.signIn.success]: (state, action) => {
    state.loading = false;
    state.authenticated = true;
    state.error = undefined;
    state.user = action.payload;
  },
  [actions.signIn.error]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [actions.signOut]: () => initialState,
});
