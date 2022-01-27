import createSagaMiddleware from 'redux-saga';
import type { Middleware } from 'redux';
import { persistStore } from 'redux-persist';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import persistedReducer from './modules/persistReducers';

const sagaMonitor = console.tron.createSagaMonitor() || null;

const sagaMiddlewares = createSagaMiddleware({ sagaMonitor });

const middlewares: Middleware[] = [sagaMiddlewares];

const store = createStore(persistedReducer(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddlewares.run(rootSaga);

export { store, persistor };
