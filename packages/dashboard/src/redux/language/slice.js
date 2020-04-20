/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { detectBrowserLocale } from '@ute-exchange/utils';
import { actionCreator } from 'utils/redux';

export const actions = {
  changeLocale: actionCreator('language/CHANGE_LOCALE'),
};

const inititalState = {
  locale: detectBrowserLocale(),
};

export default createReducer(inititalState, {
  [actions.changeLocale]: (state, action) => {
    state.locale = action.payload.locale;
  },
});
