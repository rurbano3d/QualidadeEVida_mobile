import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { completedSuccess, completedFailure } from './actions';

import api from '~/services/api';

export function* addSubscription({ payload }) {
  try {
    const {
      student_id,
      registration_id,
      category_id,
      exercise_id,
      running_id,
    } = payload;

    const response = yield call(api.post, `completed`, {
      student_id,
      registration_id,
      category_id,
      exercise_id,
      running_id,
    });
    const completeds = response.data;

    yield put(completedSuccess(completeds));
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Week completed exceeded, you can only do 5 completeds per week':
        error =
          'Checkin excedido, vocês so pode fazer 5 completeds por semana!';
        break;

      default:
        error = 'Contate o suporte!';
    }
    Alert.alert('Erro no completed', `${error}`);
    yield put(completedFailure());
  }
}

export function* removeSubscription({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `completed/${id}`);
  } catch (err) {
    Alert.alert('Erro no completed Remove');
    yield put(completedFailure());
  }
}

export default all([
  takeLatest('@completed/COMPLETED_REQUEST', addSubscription),
  takeLatest('@completed/COMPLETED_REMOVE', removeSubscription),
]);
