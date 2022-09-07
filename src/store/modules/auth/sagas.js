import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { setToken } from '~/services/RefreshToken';
import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessionStudents', {
      email,
      password,
    });
    const {
      student,
      token,
      refreshToken,
      vimeoAuth,
      isAgreement,
    } = response.data;
    // api.defaults.headers.Authorization = `Bearer ${token}`;
    setToken(token, refreshToken);
    yield put(
      signInSuccess(student, token, refreshToken, vimeoAuth, isAgreement),
    );
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
        error = err.response.data.error;
    }
    Alert.alert('Ops!', `${error}`);
    yield put(signFailure());
  }
}

// export function setToken({ payload }) {
//   if (!payload) return;

//   const { token } = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }

export function signOut() {
  // history.push('/');
}

export function* agreementRequest({ payload }) {
  const { student, isAgreement } = payload;
  try {
    yield call(api.post, 'contractChecks', {
      student_id: student,
      checked: isAgreement,
    });
  } catch (err) {
    Alert.alert('Ops!', `${err}`);
  }
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/AGREEMENT_REQUEST', agreementRequest),
]);
