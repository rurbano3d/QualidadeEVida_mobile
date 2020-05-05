import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import { AsyncStorage, Platform } from 'react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative(Platform.OS === 'ios' ? '' : 'exp://192.168.0.107:19000')
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  console.tron = tron;

  tron.clear();
}
