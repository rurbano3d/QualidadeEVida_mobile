import produce from 'immer';

const INITIAL_STATE = {
  status: '',
};
export default function schedule(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@schedule/SCHEDULE_ADD_CLASS': {
        draft.status = '';
        break;
      }

      case '@schedule/SCHEDULE_CANCEL_CLASS': {
        draft.status = '';
        break;
      }

      case '@schedule/SCHEDULE_SUCCESS': {
        draft.status = 'saved';
        break;
      }

      case '@schedule/SCHEDULE_FAILURE': {
        draft.status = 'error';
        break;
      }

      default:
    }
  });
}
