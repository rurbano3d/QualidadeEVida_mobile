import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import checkin from './checkin/reducer';
import challenges from './challenges/reducer';
import completed from './completed/reducer';
import series from './series/reducer';
import runnings from './runnings/reducer';
import signUp from './signUp/reducer';
import order from './order/reducer';

const appReducer = combineReducers({
  auth,
  user,
  checkin,
  challenges,
  completed,
  series,
  runnings,
  signUp,
  order,
});

const rootReducer = (state, action) => {
  if (action.type === '@auth/SIGN_OUT') {
    state.series = [];
    state.runnings = [];
  }
  return appReducer(state, action);
};
export default rootReducer;
