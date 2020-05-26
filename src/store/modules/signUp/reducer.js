import produce from 'immer';

const INITIAL_STATE = {
  signUps: [],
};

export default function signUp(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@signUp/SIGN_UP_REQUEST': {
        break;
      }

      case '@signUp/SIGN_UP_UPDATE': {
        break;
      }

      case '@signUp/SIGN_UP_REMOVE': {
        break;
      }

      case '@signUp/SIGN_UP_SUCCESS': {
        draft.signUps = action.payload.signUps;
        break;
      }

      case '@signUp/SIGN_UP_FAILURE': {
        break;
      }

      default:
    }
  });
}
