import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'qualidadeVida',
      storage: AsyncStorage,
      whitelist: ['auth', 'series', 'runnings'],
    },
    reducers,
  );
  return persistedReducer;
};
