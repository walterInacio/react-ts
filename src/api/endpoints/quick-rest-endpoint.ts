import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import constants from 'constants/api';

import delay from 'utils/delay';

import { snakeToCamelCaseResponse, basicErrorHandler } from './utils';

const simpleAuthentication = (
  config: AxiosRequestConfig,
): AxiosRequestConfig => {
  const id = config.url?.split('/').slice(-1)[0];
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: id,
    },
  };
};

const addDelay = async <T>(
  response: AxiosResponse<T>,
): Promise<AxiosResponse<T>> => {
  await delay(1000);
  return response;
};

const instanceAxios = axios.create({
  baseURL: constants.QUICKSTART_REST_URL,
  timeout: 2000,
  headers: {
    Accept: 'application/json',
  },
  transformResponse: [snakeToCamelCaseResponse],
  responseType: 'json',
});

instanceAxios.interceptors.response.use(basicErrorHandler);
instanceAxios.interceptors.response.use(addDelay);
instanceAxios.interceptors.request.use(simpleAuthentication);

export default {
  get: instanceAxios.get,
  post: instanceAxios.post,
  put: instanceAxios.put,
  delete: instanceAxios.delete,
};
