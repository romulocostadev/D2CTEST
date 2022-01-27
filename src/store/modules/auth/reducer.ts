import produce, { Draft } from 'immer';

import type { AuthAction, AuthState } from './types';

const INITIAL_STATE: AuthState = {
  token: '',
  signed: false,
  loading: false,
  emailError: false,
  passwordError: false,
  userId: '',
  error: '',
};

export default function auth(state = INITIAL_STATE, action: AuthAction) {
  return produce(state, (draft: Draft<AuthState>) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        draft.error = '';
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.error = '';
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.error =
          'Usuário e/ou senha incorretos. Por favor verifique e tente novamente';
        draft.loading = false;
        break;
      }
      case '@auth/SET_USER_ID': {
        draft.userId = action.payload.userId;
        draft.token = action.payload.token;
        draft.error = '';
        break;
      }
      case '@auth/CANCEL_LOADING': {
        draft.loading = false;
        break;
      }
      case '@auth/SET_SIGNED': {
        draft.signed = true;
        break;
      }
      case '@auth/SET_SIGN_OUT': {
        draft.signed = false;
        draft.emailError = false;
        draft.passwordError = false;
        draft.loading = false;
        draft.userId = '';
        draft.token = '';
        draft.error = '';
        break;
      }
      default:
    }
  });
}
