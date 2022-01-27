import { action } from 'typesafe-actions';

export function signInRequest(email: string, password: string) {
  return action('@auth/SIGN_IN_REQUEST', { email, password });
}

export function signInSuccess(token: string) {
  return action('@auth/SIGN_IN_SUCCESS', { token });
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE');
}

export function setUserId(token: string, userId: string) {
  return action('@auth/SET_USER_ID', { token, userId });
}

export function cancelLoading() {
  return action('@auth/CANCEL_LOADING');
}

export function setSigned() {
  return action('@auth/SET_SIGNED');
}

export function setSignOut() {
  return action('@auth/SET_SIGN_OUT');
}
