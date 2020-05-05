export function runningRequest(running) {
  return {
    type: '@running/RUNNING_REQUEST',
    payload: { running },
  };
}

export function runningRemove(category, running_id) {
  return {
    type: '@running/RUNNING_REMOVE',
    payload: { category, running_id },
  };
}

export function runningSuccess(running) {
  return {
    type: '@running/RUNNING_SUCCESS',
    payload: { running },
  };
}

export function runningFailure() {
  return {
    type: '@running/RUNNING_FAILURE',
  };
}
