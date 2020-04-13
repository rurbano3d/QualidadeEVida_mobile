export function challengeRequest(student_id, category_id) {
  return {
    type: '@challenge/CHALLENGE_REQUEST',
    payload: { student_id, category_id },
  };
}

export function challengeRemove(student_id, category_id) {
  return {
    type: '@challenge/CHALLENGE_REMOVE',
    payload: { student_id, category_id },
  };
}

export function challengeSuccess(challenge) {
  return {
    type: '@challenge/CHALLENGE_SUCCESS',
    payload: { challenge },
  };
}

export function challengeFailure() {
  return {
    type: '@challenge/CHALLENGE_FAILURE',
  };
}
