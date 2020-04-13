import produce from 'immer';

const INITIAL_STATE = {
  challenges: [],
};

export default function challenge(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@challenge/CHALLENGE_REQUEST': {
        break;
      }

      case '@challenge/CHALLENGE_REMOVE': {
        break;
      }

      case '@challenge/CHALLENGE_SUCCESS': {
        draft.challenges = action.payload.challenges;
        break;
      }

      case '@challenge/CHALLENGE_FAILURE': {
        break;
      }

      default:
    }
  });
}
