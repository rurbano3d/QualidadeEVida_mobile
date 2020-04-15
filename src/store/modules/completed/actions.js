export function completedRequest(student_id, exercise_id) {
  return {
    type: '@completed/COMPLETED_REQUEST',
    payload: { student_id, exercise_id },
  };
}

export function completedRemove(student_id, exercise_id) {
  return {
    type: '@completed/COMPLETED_REMOVE',
    payload: { student_id, exercise_id },
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
