import { takeLatest, call, put, all } from 'redux-saga/effects';

import type { ActionType } from 'typesafe-actions';

import { api } from '../../../services/api';

import {
  signInRequest,
  signInSuccess,
  setUserId,
  signInFailure,
  setSigned,
  cancelLoading,
} from './actions';

export function* signIn({ payload }: ActionType<typeof signInRequest>): any {
  try {
    const { email, password } = payload;

    // Adicione o End-point de login e dados necessários
    const response = yield call(api.post, '/login', {
      email,
      password,
    });

    if (response.status === 200) {
      const { token, id } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`; // Para autenticação com Bearer Token

      yield put(setUserId(token, id));
      yield put(signInSuccess(token));
      yield put(setSigned());
    }
  } catch (error) {
    yield put(cancelLoading());
    switch (error.response.status) {
      case 500:
        yield put(signInFailure());
        break;
      case 404:
        yield put(signInFailure());
        break;
      default:
        yield put(signInFailure());
        break;
    }
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
