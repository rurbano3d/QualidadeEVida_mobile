import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import checkin from './checkin/reducer';
import challenges from './challenges/reducer';
import completed from './completed/reducer';
import exercises from './exercises/reducer';
import series from './series/reducer';

const appReducer = combineReducers({
  auth,
  user,
  checkin,
  challenges,
  completed,
  exercises,
  series,
});

const rootReducer = (state, action) => {
  if (action.type === '@auth/SIGN_OUT') {
    state.series = [];
    state.exercises = [];
  }
  return appReducer(state, action);
};
export default rootReducer;
