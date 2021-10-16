export function signUpRequest(gym, name, phone, email, password, city) {
  return {
    type: '@signUp/SIGN_UP_REQUEST',
    payload: { gym, name, phone, email, password, city },
  };
}

export function signUpUpdate(id, birth, weight, height) {
  return {
    type: '@signUp/SIGN_UP_UPDATE',
    payload: { id, birth, weight, height },
  };
}

export function signUpRemove(name, phone, email, password, city) {
  return {
    type: '@signUp/SIGN_UP_REMOVE',
    payload: { name, phone, email, password, city },
  };
}

export function signUpSuccess(signUp) {
  return {
    type: '@signUp/SIGN_UP_SUCCESS',
    payload: { signUp },
  };
}

export function signUpFailure() {
  return {
    type: '@signUp/SIGN_UP_FAILURE',
  };
}
