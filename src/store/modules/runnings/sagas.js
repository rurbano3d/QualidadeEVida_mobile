import { Alert } from 'react-native';
import { takeLatest, put, all } from 'redux-saga/effects';

import { runningSuccess, runningFailure } from './actions';

export function* addRunning({ payload }) {
  try {
    const { running } = payload;
    console.tron.log(running);
    yield put(runningSuccess(running));
  } catch (err) {
    Alert.alert('Erro no running');
    yield put(runningFailure());
  }
}

export default all([takeLatest('@running/RUNNING_REQUEST', addRunning)]);
