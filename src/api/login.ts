// import endpoint from './endpoint';

export interface Credentials {
  user: string;
  password: string;
}

export interface LoginResponse {
  expire: number;
  refreshToken: string;
  token: string;
  userId: string;
}

const dummyLoginResponse: LoginResponse = {
  // 1 day
  expire: Date.now() + 86400000,
  refreshToken: 'refreshToken',
  token: 'token',
  userId: '1',
};

const login = (_credentials: Credentials): Promise<LoginResponse> => {
  // const { data } = await endpoint.post('/login', credentials);
  return new Promise((resolve): void => {
    setTimeout((): void => resolve(dummyLoginResponse), 1000);
  });
};

const logout = (): Promise<void> => {
  // await endpoint.post('/logout');
  return new Promise((resolve): void => {
    setTimeout(resolve, 1000);
  });
};

const refresh = async (_token: string): Promise<LoginResponse> => {
  // await endpoint.post('/refresh');
  return new Promise((resolve): void => {
    setTimeout((): void => resolve(dummyLoginResponse), 1000);
  });
};

export default {
  login,
  logout,
  refresh,
};
