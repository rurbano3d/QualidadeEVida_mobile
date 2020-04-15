import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { exercisesSuccess, exercisesFailure } from './actions';

export function* addExercises({ payload }) {
  try {
    const { exercise, category } = payload;
    const exercises = {
      exercise,
      category,
      date: new Date(),
    };

    yield put(exercisesSuccess(exercises));
  } catch (err) {
    Alert.alert('Erro no exercises');
    yield put(exercisesFailure());
  }
}

export default all([takeLatest('@exercises/EXERCISES_REQUEST', addExercises)]);
