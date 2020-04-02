import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email } = payload;
    const response = yield call(api.post, 'sessionStudents', {
      email,
    });
    const { id, name } = response.data;
    const student = {
      id,
      name,
    };
    console.tron.log(student);
    yield put(signInSuccess(student));
  } catch (err) {
    Alert.alert('Login error', `${err.response.data.error}`);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
