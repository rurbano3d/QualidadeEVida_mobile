import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { challengeSuccess, challengeFailure } from './actions';

import api from '~/services/api';

export function* addSubscription({ payload }) {
  try {
    const { student_id, category_id } = payload;

    const response = yield call(api.post, `subscriptions`, {
      student_id,
      category_id,
    });
    const challenges = response.data;

    yield put(challengeSuccess(challenges));
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Week challenge exceeded, you can only do 5 challenges per week':
        error =
          'Checkin excedido, vocês so pode fazer 5 challenges por semana!';
        break;

      default:
        error = 'Contate o suporte!';
    }
    Alert.alert('Erro no challenge', `${error}`);
    yield put(challengeFailure());
  }
}

export function* removeSubscription({ payload }) {
  try {
    const { student_id, category_id } = payload;

    yield call(api.delete, `subscriptions/${student_id}/${category_id}`);
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Week challenge exceeded, you can only do 5 challenges per week':
        error =
          'Checkin excedido, vocês so pode fazer 5 challenges por semana!';
        break;

      default:
        error = 'Contate o suporte!';
    }
    Alert.alert('Erro no challenge', `${error}`);
    yield put(challengeFailure());
  }
}

export default all([
  takeLatest('@challenge/CHALLENGE_REQUEST', addSubscription),
  takeLatest('@challenge/CHALLENGE_REMOVE', removeSubscription),
]);
