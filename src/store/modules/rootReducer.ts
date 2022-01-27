import { combineReducers } from 'redux';
import type { StoreState } from '../createStore';

import auth from './auth/reducer';

export default combineReducers<StoreState>({ auth });
