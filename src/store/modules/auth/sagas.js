import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessionStudents', {
      email,
      password,
    });
    const { student, token, vimeoAuth } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const responseRegistration = yield call(api.get, 'registrations', {
      params: { student_id: student.id },
    });
    const monthlyResponse = yield api.get('monthlyPayments', {
      params: { q: responseRegistration.id },
    });

    const registration = responseRegistration.data;
    const monthly = monthlyResponse.data;

    yield put(signInSuccess(student, registration, monthly, token, vimeoAuth));
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Student not found':
        error = 'Seu e-mail ou senha não confere!';
        break;
      case 'Password does not match':
        error = 'Seu e-mail ou senha não confere!';
        break;
      case 'Student has no Registration':
        error = 'Sua matrícula ainda não foi cadastrada!';
        break;
      case 'Student register is not active':
        error = 'Sua matrícula não esta ativa!';
        break;
      default:
        error = 'Contate o suporte!';
    }
    Alert.alert('Ops!', `${error}`);
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
