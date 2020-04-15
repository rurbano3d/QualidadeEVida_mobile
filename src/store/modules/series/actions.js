export function seriesRequest(position, exercise, category) {
  return {
    type: '@series/SERIES_REQUEST',
    payload: { position, exercise, category },
  };
}

export function seriesRemove(position, exercise, category) {
  return {
    type: '@series/SERIES_REMOVE',
    payload: { position, exercise, category },
  };
}

export function seriesSuccess(serie) {
  return {
    type: '@series/SERIES_SUCCESS',
    payload: { serie },
  };
}

export function seriesFailure() {
  return {
    type: '@series/SERIES_FAILURE',
  };
}
