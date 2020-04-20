export function completedRequest(
  student_id,
  registration_id,
  category_id,
  exercise_id,
  running_id,
) {
  return {
    type: '@completed/COMPLETED_REQUEST',
    payload: {
      student_id,
      registration_id,
      category_id,
      exercise_id,
      running_id,
    },
  };
}

export function completedRemove(id) {
  return {
    type: '@completed/COMPLETED_REMOVE',
    payload: {
      id,
    },
  };
}

export function completedSuccess(completed) {
  return {
    type: '@completed/COMPLETED_SUCCESS',
    payload: { completed },
  };
}

export function completedFailure() {
  return {
    type: '@completed/COMPLETED_FAILURE',
  };
}
