/* eslint-disable max-classes-per-file */
import camelCaseKeys from 'camelcase-keys';
import snakeCaseKeys from 'snakecase-keys';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const snakeToCamelCaseResponse = <T>(data: T): T =>
  data && ((camelCaseKeys(data, { deep: true }) as unknown) as T);

export const camelCaseToSnakeRequest = <T extends {}>(
  data: T,
  headers: Record<string, unknown>,
): T | string => {
  if (data && !headers['Content-Type']) {
    // eslint-disable-next-line no-param-reassign
    headers['Content-Type'] = 'application/json';
    return JSON.stringify(snakeCaseKeys(data, { deep: true }));
  }

  return data || '';
};

export class APIError<T> extends Error {
  request: AxiosRequestConfig;

  response: AxiosResponse<T>;

  status: number;

  constructor(request: AxiosRequestConfig, response: AxiosResponse<T>) {
    super(`failed ${request.url}: ${response.status} - ${response.statusText}`);
    this.request = request;
    this.response = response;
    this.status = response.status;
  }
}

export class APIContentError<T> extends Error {
  request: AxiosRequestConfig;

  response: AxiosResponse<T>;

  constructor(
    msg: string,
    request: AxiosRequestConfig,
    response: AxiosResponse<T>,
  ) {
    super(msg);
    this.request = request;
    this.response = response;
  }
}

export const basicErrorHandler = <T>(
  response: AxiosResponse<T>,
): AxiosResponse<T> => {
  if (response.status >= 200 && response.status <= 300) {
    const contentType = response.headers && response.headers['content-type'];
    if (contentType && !contentType.startsWith('application/json')) {
      throw new APIContentError(
        `invalid content type: ${contentType}`,
        response.config,
        response,
      );
    }

    return response;
  }
  throw new APIError(response.config, response);
};

export default {
  snakeToCamelCaseResponse,
  camelCaseToSnakeRequest,
  APIError,
  APIContentError,
  basicErrorHandler,
};
