import { pick } from 'lodash';
import makeRequest, { HTTP_METHOD } from '../core';
import AUTH_URL from './constants';

export default {
  signIn: async data => {
    const params = pick(data, ['email', 'password']);
    const result = await makeRequest(AUTH_URL.SIGN_IN, HTTP_METHOD.POST, params);
    return result;
  },
  getProfile: async () => {
    const result = await makeRequest(AUTH_URL.GET_PROFILE, HTTP_METHOD.GET);
    return result;
  },
};
