export enum Types {
  LOGIN = 'user/LOGIN',
}

export interface LoginPayload {
  user: string;
  password: string;
}

export interface LoginAction {
  payload: LoginPayload;
  type: Types;
}

export const Actions = {
  login: (payload: LoginPayload): LoginAction => ({
    payload,
    type: Types.LOGIN,
  }),
};
