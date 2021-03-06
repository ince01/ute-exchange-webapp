/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const fetchSliceCreator = name =>
  createSlice({
    name,
    initialState,
    reducers: {
      request(state) {
        state.loading = true;
      },
      success(state, { payload }) {
        state.loading = false;
        return Object.assign(state, payload);
      },
      error(state, { payload }) {
        state.loading = false;
        state.error = payload.error;
      },
      refresh(state, { payload }) {
        if (!payload) {
          return initialState;
        }
        payload.fields.forEach(field => {
          state[field] = initialState[field];
        });
        return state;
      },
    },
  });
