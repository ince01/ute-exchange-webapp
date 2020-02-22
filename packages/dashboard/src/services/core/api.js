import axios from 'axios';
import { stringify } from 'query-string';
import { join, isEmpty, omit } from 'lodash';
import config from '../../config/app.config';
// import { getToken } from 'utils/helpers';
import { PUBLIC_API } from './constants';

function api() {
  // const token = getToken().get('idToken');

  const instance = axios.create({
    baseURL: config.apiUrl,
    headers: {
      // Authorization: `jwt ${token}`,
    },
  });

  instance.interceptors.request.use(function handleRequest(reqConfig) {
    let configOverride = reqConfig;
    if (PUBLIC_API.includes(config.url)) {
      configOverride = omit(reqConfig, 'headers.Authorization');
    }
    return configOverride;
  });

  instance.interceptors.response.use(
    function handleRespone(response) {
      let responseOverride = response;
      if (Object.keys(response.headers).includes('content-range')) {
        const count = response.headers['content-range'].split('/')[1];
        responseOverride = {
          ...responseOverride,
          totalRecord: Number(count),
        };
      }
      responseOverride = {
        ...responseOverride,
        data: response.data.data,
        message: response.data?.message,
      };
      return responseOverride;
    },
    function handleError(error) {
      return Promise.reject(error);
    },
  );

  return instance;
}

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
export default async function makeRequest(url, method = 'GET', data = {}, requestConfig = {}) {
  let querryParams;
  let response = null;
  const urlGet = isEmpty(querryParams) ? url : join([url, querryParams], '?');
  try {
    switch (method) {
      case 'GET':
        querryParams = stringify(data);
        response = await api().get(urlGet, requestConfig);
        break;
      case 'POST':
        response = await api().post(url, data, requestConfig);
        break;
      case 'PUT':
        response = await api().put(url, data, requestConfig);
        break;
      case 'DELETE':
        response = await api().delete(url, data, requestConfig);
        break;
      default:
        throw new Error('Method is required.');
    }
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
