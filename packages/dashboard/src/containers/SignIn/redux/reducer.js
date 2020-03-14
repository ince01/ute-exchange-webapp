/* eslint-disable no-console */
import { createReducer } from '@reduxjs/toolkit';
import actionCreator from '../../../utils/redux';

export const signInActions = actionCreator('AUTH/LOGIN');

const inititalState = {
  loading: false,
  userData: {},
};

const authReducer = createReducer(inititalState, {
  [signInActions.request]: (state, action) => {
    console.log(action);
    state.loading = true;
  },
  [signInActions.success]: (state, action) => {
    console.log(action);
    state.loading = false;
  },
  [signInActions.error]: (state, action) => {
    console.log(action);
    state.loading = false;
  },
});

export default authReducer;
