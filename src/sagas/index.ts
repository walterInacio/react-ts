import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import permissionSaga from './user';

export default function* root(): SagaIterator {
  yield all([fork(permissionSaga)]);
}
