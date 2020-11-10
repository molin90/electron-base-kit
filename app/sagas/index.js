import { all, takeLatest } from 'redux-saga/effects';
/* HOME */
import { types as mainTypes } from '../reducers/main';
import * as mainSagas from './main';

export default function* rootSaga() {
  yield all([
    // takeLatest(mainTypes.GET_WELCOME_FLOW, mainSagas.getWelcomeFlow),
  ]);
}
