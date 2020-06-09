import produce from 'immer';

const INITIAL_STATE = {
  student: null,
  signed: false,
  loading: false,
  token: null,
  vimeoAuth: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.student = action.payload.student;
        draft.token = action.payload.token;
        draft.vimeoAuth = action.payload.vimeoAuth;
        draft.signed = true;
        draft.loading = false;

        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.vimeoAuth = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
