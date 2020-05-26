import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import checkin from './checkin/sagas';
import challenges from './challenges/sagas';
import completed from './completed/sagas';
import series from './series/sagas';
import runnings from './runnings/sagas';
import signUp from './signUp/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    checkin,
    challenges,
    completed,
    series,
    runnings,
    signUp,
  ]);
}
