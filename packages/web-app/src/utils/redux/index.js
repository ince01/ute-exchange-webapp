import { createAction } from '@reduxjs/toolkit';

const actionCreator = type => ({
  request: createAction(`${type}:REQUEST`),
  success: createAction(`${type}:SUCCESS`),
  error: createAction(`${type}:ERROR`),
  refesh: createAction(`${type}:REFESH`),
});

export default actionCreator;
