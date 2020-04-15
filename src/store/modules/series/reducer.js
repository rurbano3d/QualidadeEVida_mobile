import produce from 'immer';
import { isBefore, parseISO } from 'date-fns';

const INITIAL_STATE = [
  {
    position: null,
    exercise: null,
    category: null,
    date: null,
  },
];

export default function series(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@series/SERIES_REQUEST': {
        break;
      }

      case '@series/SERIES_REMOVE': {
        const searchForDayGoneByIndex = draft.findIndex(day =>
          isBefore(parseISO(day.date), new Date()),
        );

        if (searchForDayGoneByIndex >= 0) {
          draft.splice(searchForDayGoneByIndex, 1);
        }

        const { position, exercise, category } = action.payload;
        const serieIndex = draft.findIndex(
          serie =>
            serie.position === position &&
            serie.exercise === exercise &&
            serie.category === category,
        );

        draft.splice(serieIndex, 1);
        break;
      }

      case '@series/SERIES_SUCCESS': {
        draft.push(action.payload.serie);
        break;
      }

      case '@series/SERIES_FAILURE': {
        break;
      }

      default:
    }
  });
}
