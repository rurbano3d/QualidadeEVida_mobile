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
    const { student, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const responseRegistration = yield call(api.get, 'registrations', {
      params: { student_id: student.id },
    });

    const registration = responseRegistration.data;

    yield put(signInSuccess(student, registration, token));
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
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
