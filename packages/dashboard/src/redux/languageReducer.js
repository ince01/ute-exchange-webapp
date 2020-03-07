import { createReducer, createAction } from '@reduxjs/toolkit';

export const changeLanguage = createAction('LANGUAGE/CHANGE_LOCALE');

const inititalState = { locale: 'vi' };

const languageReducer = createReducer(inititalState, {
  [changeLanguage]: state => {
    if (state.locale === 'vi') return { locale: 'en' };
    return { locale: 'vi' };
  },
});

export default languageReducer;
