export function scheduleAddClass(registration_id, class_id, days_class_id) {
  return {
    type: '@schedule/SCHEDULE_ADD_CLASS',
    payload: { registration_id, class_id, days_class_id },
  };
}
export function scheduleCancelClass(id) {
  return {
    type: '@schedule/SCHEDULE_CANCEL_CLASS',
    payload: { id },
  };
}
export function scheduleSuccess() {
  return {
    type: '@schedule/SCHEDULE_SUCCESS',
  };
}

export function scheduleFailure() {
  return {
    type: '@schedule/SCHEDULE_FAILURE',
  };
}
