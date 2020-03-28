import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const makeSelectAuthenticated = () => createSelector(selectAuth, auth => auth.authenticated);

export const makeSelectCurrentUser = () => createSelector(selectAuth, auth => auth.user);

export const makeSelectloading = () => createSelector(selectAuth, auth => auth.loading);
