import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { Reducer } from 'redux';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'react-base', // Insira uma chave de sua preferência para o Storage
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );
  return persistedReducer;
};
