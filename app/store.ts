import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// eslint-disable-next-line import/no-cycle
import rootSagas from './sagas/index';
import createRootReducer from './reducers/index';

export const history = createBrowserHistory({
  basename: '/',
});
const rootReducer = createRootReducer(history);
export type RootState = ReturnType<typeof rootReducer>;

export const configuredStore = (initialState?: RootState) => {
  const sagaMiddleware = createSagaMiddleware();
  const router = routerMiddleware(history);
  const middleware = [...getDefaultMiddleware(), router, sagaMiddleware];

  const mystore = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: initialState,
  });

  sagaMiddleware.run(rootSagas);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept(
      './reducers/index',
      // eslint-disable-next-line global-require
      () => mystore.replaceReducer(require('./reducers/index').default)
    );
  }
  return mystore;
};
