import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as RootNavigation from '~/services/NavigationService';

import { orderSuccess, orderFailure } from './actions';

import api from '~/services/api';

export function* addOrder({ payload }) {
  try {
    const { question, student_id, sector, sector_id } = payload;

    const response = yield call(api.post, '/help-orders/question', {
      question,
      student_id,
      sector,
      sector_id,
    });
    const order = response.data;

    yield put(orderSuccess(order));
    // RootNavigation.navigate('OrderDetail', { refresh: true });
    // RootNavigation.goBack();
  } catch (err) {
    Alert.alert('Ops!', `${err.response.data.error}`);

    yield put(orderFailure());
  }
}

export function* removeOrder({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `help-orders/${id}`);
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Week order exceeded, you can only do 5 orders per week':
        error = 'Checkin excedido, vocês so pode fazer 5 orders por semana!';
        break;

      default:
        error = 'Contate o suporte!';
    }
    Alert.alert('Erro no order', `${error}`);
    yield put(orderFailure());
  }
}

export default all([
  takeLatest('@order/ORDER_REQUEST', addOrder),
  takeLatest('@order/ORDER_REMOVE', removeOrder),
]);
