import produce from 'immer';

const INITIAL_STATE = [
  {
    category: null,
    exercise: null,
    date: null,
  },
];

export default function exercises(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@exercises/EXERCISES_REQUEST': {
        break;
      }

      case '@exercises/EXERCISES_REMOVE': {
        const { exercise, category } = action.payload;
        const exerciseIndex = draft.findIndex(
          item => item.exercise === exercise && item.category === category,
        );

        draft.splice(exerciseIndex, 1);
        break;
      }

      case '@exercises/EXERCISES_SUCCESS': {
        draft.push(action.payload.exercises);
        break;
      }

      case '@exercises/EXERCISES_FAILURE': {
        break;
      }

      default:
    }
  });
}
