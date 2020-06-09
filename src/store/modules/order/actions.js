export function orderRequest(question, student_id, sector, sector_id) {
  return {
    type: '@order/ORDER_REQUEST',
    payload: { question, student_id, sector, sector_id },
  };
}

export function orderRemove(id) {
  return {
    type: '@order/ORDER_REMOVE',
    payload: { id },
  };
}

export function orderSuccess(order) {
  return {
    type: '@order/ORDER_SUCCESS',
    payload: { order },
  };
}

export function orderFailure() {
  return {
    type: '@order/ORDER_FAILURE',
  };
}
