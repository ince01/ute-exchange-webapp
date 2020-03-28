/* eslint-disable import/prefer-default-export */
import { createAction } from '@reduxjs/toolkit';

export const fetchActionCreator = type => ({
  request: createAction(`${type}:REQUEST`),
  success: createAction(`${type}:SUCCESS`),
  error: createAction(`${type}:ERROR`),
  refesh: createAction(`${type}:REFESH`),
});
