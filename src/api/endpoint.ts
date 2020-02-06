/* eslint-disable max-classes-per-file */
import { AxiosRequestConfig, AxiosResponse } from 'axios';

class APIError<T> extends Error {
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

class APIContentError<T> extends Error {
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

const basicErrorHandler = <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
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
  APIError,
  APIContentError,
  basicErrorHandler,
};
