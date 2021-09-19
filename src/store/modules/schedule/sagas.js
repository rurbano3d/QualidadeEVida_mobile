import { Alert } from 'react-native';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import api from '~/services/api';
import { scheduleSuccess, scheduleFailure } from './actions';

export function* scheduleAddClass({ payload }) {
  try {
    const { registration_id, class_id, days_class_id } = payload;
    const response = yield call(api.post, 'vacanciesV2', {
      registration_id,
      class_id,
      days_class_id,
      one_time: true,
    });
    const vacancie = response.data;
    yield put(scheduleSuccess(vacancie));
  } catch (err) {
    Alert.alert(err.response.data.error);
    yield put(scheduleFailure());
  }
}
export function* scheduleCancelClass({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `cancelVacanciesV2/${id}`);
    yield put(scheduleSuccess());
  } catch (err) {
    Alert.alert('Não foi possível cancelar esta aula!');
    yield put(scheduleFailure());
  }
}

export default all([
  takeLatest('@schedule/SCHEDULE_ADD_CLASS', scheduleAddClass),
  takeLatest('@schedule/SCHEDULE_CANCEL_CLASS', scheduleCancelClass),
]);
