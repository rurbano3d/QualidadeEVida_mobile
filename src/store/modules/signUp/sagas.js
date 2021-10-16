import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as RootNavigation from '~/services/NavigationService';

import { signUpSuccess, signUpFailure } from './actions';

import api from '~/services/api';

export function* addStudent({ payload }) {
  try {
    const { gym, name, phone, email, password, city } = payload;
    const response = yield call(api.post, '/students', {
      name,
      phone,
      email,
      password,
      city,
      gym_id: gym,
    });
    const signUp = response.data;

    yield put(signUpSuccess(signUp));
    RootNavigation.navigate('SignUpComplements', { signUp });
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Email already exists':
        error = 'Este e-mail já esta cadastrado!';
        break;
      default:
        error = 'Contate o suporte!';
    }
    Alert.alert('Ops!', `${error}`);

    yield put(signUpFailure());
  }
}

export function* updateStudent({ payload }) {
  try {
    const { id, birth, weight, height } = payload;

    const response = yield call(api.put, `/students/${id}`, {
      birth,
      weight,
      height,
    });
    const update = response.data;

    yield put(signUpSuccess(update));
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    RootNavigation.navigate('SignIn', {});
  } catch (err) {
    Alert.alert('Erro no signUp', `${err}`);
    yield put(signUpFailure());
  }
}

export function* removeStudent({ payload }) {
  try {
    const { name, phone, email, password } = payload;

    yield call(api.delete, `subscriptions/${student_id}/${category_id}`);
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Week signUp exceeded, you can only do 5 signUps per week':
        error = 'Checkin excedido, vocês so pode fazer 5 signUps por semana!';
        break;

      default:
        error = 'Contate o suporte!';
    }
    Alert.alert('Erro no signUp', `${error}`);
    yield put(signUpFailure());
  }
}

export default all([
  takeLatest('@signUp/SIGN_UP_REQUEST', addStudent),
  takeLatest('@signUp/SIGN_UP_UPDATE', updateStudent),
  takeLatest('@signUp/SIGN_UP_REMOVE', removeStudent),
]);
