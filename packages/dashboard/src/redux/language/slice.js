/* eslint-disable no-param-reassign */
import { createReducer, createAction } from '@reduxjs/toolkit';
import { detectBrowserLocale } from '@ute-exchange/utils';

export const actions = {
  changeLocale: createAction('language/CHANGE_LOCALE'),
};

const inititalState = {
  locale: detectBrowserLocale(),
};

export default createReducer(inititalState, {
  [actions.changeLocale]: (state, action) => {
    state.locale = action.payload.locale;
  },
});
