import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../modules/github/epics';

import rootReducer from '../modules/github/reducers';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(epicMiddleware),
);

epicMiddleware.run(rootEpic);

export default store;