import axios from 'axios';
import { stringify } from 'query-string';
import { join, isEmpty } from 'lodash';
import { getToken, removeToken } from '@ute-exchange/utils';
import appConfig from 'config/app.config';
import { PUBLIC_API, AUTHENTICATED_ERROR_CODES } from './constants';

const { apiUrl, jwtPrefix } = appConfig;

export class FetchError extends Error {
  constructor(message, error) {
    super(message);
    this.response = {
      name: 'fetchError',
      message: error?.response?.data?.message || message,
      code: error?.response?.data?.code || 'REQUEST_FAILED',
    };
  }
}

function createAxiosInstance() {
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 120000, // Waiting 2m for request timeout
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  instance.interceptors.request.use(function handleRequest(reqConfig) {
    const configOverride = reqConfig;

    if (!PUBLIC_API.has(configOverride.url)) {
      const token = getToken();
      configOverride.headers.Authorization = `${jwtPrefix} ${token}`;
    }

    return configOverride;
  });

  instance.interceptors.response.use(
    function handleRespone(response) {
      const responseOverride = response;
      // Override respone here if needed
      return responseOverride;
    },
    function handleError(error) {
      const codeError = error?.response?.data?.code;

      if (AUTHENTICATED_ERROR_CODES.has(codeError)) {
        removeToken();
      }

      return Promise.reject(new FetchError(error.message, error));
    },
  );

  return instance;
}

const fetchInstance = createAxiosInstance();

/**
 * Make XMLHttpRequests with Axios instance.
 *
 * @param {String} url
 * @param {String} method
 * @param {Object} data
 * @param {Object} reqConfig
 *
 * @return
 */
export default async function makeRequest(url, method, data = {}, requestConfig = {}) {
  let querryParams;
  let response = null;
  const urlGet = isEmpty(querryParams) ? url : join([url, querryParams], '?');
  try {
    switch (method) {
      case 'GET':
        querryParams = stringify(data);
        response = await fetchInstance.get(urlGet, requestConfig);
        break;
      case 'POST':
        response = await fetchInstance.post(url, data, requestConfig);
        break;
      case 'PUT':
        response = await fetchInstance.put(url, data, requestConfig);
        break;
      case 'DELETE':
        response = await fetchInstance.delete(url, data, requestConfig);
        break;
      default:
        throw new Error('HTTP method is required');
    }
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
