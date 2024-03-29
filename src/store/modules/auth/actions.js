export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(
  student,
  token,
  refreshToken,
  vimeoAuth,
  isAgreement,
) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { student, token, refreshToken, vimeoAuth, isAgreement },
  };
}
export function setRegistration(registration) {
  return {
    type: '@auth/SET_REGISTRATION',
    payload: { registration },
  };
}

export function signUpRequest(name, email, password, confirmPassword) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password, confirmPassword },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function agreementRequest(student, isAgreement) {
  return {
    type: '@auth/AGREEMENT_REQUEST',
    payload: { student, isAgreement },
  };
}
