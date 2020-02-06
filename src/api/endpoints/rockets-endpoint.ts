import axios from 'axios';

import constants from 'constants/api';

import {
  snakeToCamelCaseResponse,
  camelCaseToSnakeRequest,
  basicErrorHandler,
} from './utils';

const instanceAxios = axios.create({
  baseURL: constants.API_BASE_URL,
  timeout: 2000,
  headers: {
    Accept: 'application/json',
  },
  transformRequest: [camelCaseToSnakeRequest],
  transformResponse: [snakeToCamelCaseResponse],
  responseType: 'json',
});

instanceAxios.interceptors.response.use(basicErrorHandler);

export default {
  get: instanceAxios.get,
  post: instanceAxios.post,
  put: instanceAxios.put,
  delete: instanceAxios.delete,
};
