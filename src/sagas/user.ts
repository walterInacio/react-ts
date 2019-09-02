import { SagaIterator } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

import { Types } from 'actions/user';

// eslint-disable-next-line no-empty-function
function* userLogin(): SagaIterator {}

function* permissionSaga(): SagaIterator {
  yield takeLatest(Types.LOGIN, userLogin);
}

export default permissionSaga;
