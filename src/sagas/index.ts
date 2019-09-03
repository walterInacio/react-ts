import createSagaMiddleware, { SagaIterator, Task } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import userSaga from 'sagas/user';

function* rootSaga(): SagaIterator {
  yield fork(userSaga);
}

const sagaMiddleware = createSagaMiddleware<{}>();

let sagaTask: Task | undefined;

export const runSagaMiddleware = (): void => {
  sagaTask = sagaMiddleware.run(rootSaga);
};

export const stopSagaMiddleware = (): void => {
  if (sagaTask) {
    sagaTask.cancel();
    sagaTask = undefined;
  }
};

export default sagaMiddleware;
