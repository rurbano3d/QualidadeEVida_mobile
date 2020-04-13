import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import checkin from './checkin/reducer';
import challenges from './challenges/reducer';

export default combineReducers({
  auth,
  user,
  checkin,
  challenges,
});
