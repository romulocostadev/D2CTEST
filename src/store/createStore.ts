import {
  createStore,
  Reducer,
  applyMiddleware,
  Middleware,
  compose,
  StoreEnhancer,
} from 'redux';

import type { AuthAction, AuthState } from './modules/auth/types';

export interface StoreState {
  auth: AuthState;
}

export type StoreAction = AuthAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer: StoreEnhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
