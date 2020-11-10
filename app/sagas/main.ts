import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import API from './constants';
import { actions as mainActions } from '../reducers/main';

export const fetchWelcomeJson = () => axios.get(API.GET_WELCOME_FLOW);

export function* getWelcomeFlow() {
  try {
    // const response = yield call(fetchWelcomeJson);
    // yield put(mainActions.setMainMenu(response.data));

    // yield put(mainActions.setWelcomeFlow());
  } catch (err) {
    yield mainActions.setFatalError(err);
  }
}
