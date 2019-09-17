import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

import { Store } from 'reducers/types';
import sagaMiddleware, { runSagaMiddleware } from 'sagas';
import router, { routerMiddleware } from 'reducers/router';
import user from 'reducers/user';

const combinedReducers = combineReducers({
  router,
  user,
  form: formReducer,
});

const enhancer = composeWithDevTools(
  applyMiddleware(routerMiddleware, sagaMiddleware),
);

const store: Store = createStore(combinedReducers, enhancer);

runSagaMiddleware();

export default store;
