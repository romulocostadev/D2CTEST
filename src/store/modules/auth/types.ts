import type { ActionType } from 'typesafe-actions';

import type * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export interface AuthState {
  readonly token: string;
  readonly signed: boolean;
  readonly loading: boolean;
  readonly emailError: boolean;
  readonly passwordError: boolean;
  readonly userId: string;
  readonly error: string;
}
