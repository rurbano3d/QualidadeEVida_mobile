import { Alert } from 'react-native';
import { takeLatest, put, all } from 'redux-saga/effects';
import { setDate } from 'date-fns';

import { seriesSuccess, seriesFailure } from './actions';

export function* addSeries({ payload }) {
  try {
    const { position, exercise, category } = payload;
    // const testDate = setDate(new Date(), 11);
    const serie = {
      position,
      exercise,
      category,
      date: new Date(),
    };

    yield put(seriesSuccess(serie));
  } catch (err) {
    Alert.alert('Erro no series');
    yield put(seriesFailure());
  }
}

export default all([takeLatest('@series/SERIES_REQUEST', addSeries)]);
