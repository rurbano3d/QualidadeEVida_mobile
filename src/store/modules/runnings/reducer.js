import produce from 'immer';

const INITIAL_STATE = [
  {
    running: null,
    category: null,
    textValue: null,
    position: null,
  },
];
export default function running(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@running/RUNNING_REQUEST': {
        break;
      }

      case '@running/RUNNING_REMOVE': {
        const { category, running_id } = action.payload;
        draft.map((item, index) => {
          if (item.category === category && item.running === running_id) {
            draft.splice(index);
          }
        });

        break;
      }

      case '@running/RUNNING_SUCCESS': {
        draft.push(action.payload.running);
        break;
      }

      case '@running/RUNNING_FAILURE': {
        break;
      }

      default:
    }
  });
}
