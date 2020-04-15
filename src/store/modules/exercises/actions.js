export function exercisesRequest(exercise, category) {
  return {
    type: '@exercises/EXERCISES_REQUEST',
    payload: { exercise, category },
  };
}

export function exercisesRemove(exercise, category) {
  return {
    type: '@exercises/EXERCISES_REMOVE',
    payload: { exercise, category },
  };
}

export function exercisesSuccess(exercises) {
  return {
    type: '@exercises/EXERCISES_SUCCESS',
    payload: { exercises },
  };
}

export function exercisesFailure() {
  return {
    type: '@exercises/EXERCISES_FAILURE',
  };
}
