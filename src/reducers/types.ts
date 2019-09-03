import { Store as ReduxStore, Dispatch } from 'redux';

type State = {};
type ReduxAction = { type: string };

export type Store = ReduxStore<State, ReduxAction> & {
  dispatch: Dispatch;
};
