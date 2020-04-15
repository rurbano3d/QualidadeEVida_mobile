import produce from 'immer';

const INITIAL_STATE = {
  completeds: [],
};

export default function completed(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@completed/COMPLETED_REQUEST': {
        break;
      }

      case '@completed/COMPLETED_REMOVE': {
        break;
      }

      case '@completed/COMPLETED_SUCCESS': {
        draft.completeds = action.payload.completeds;
        break;
      }

      case '@completed/COMPLETED_FAILURE': {
        break;
      }

      default:
    }
  });
}
