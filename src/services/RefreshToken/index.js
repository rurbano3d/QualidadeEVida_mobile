import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';

import * as RootNavigation from '~/services/NavigationService';

export const setToken = (token, refreshToken) => {
  AsyncStorage.setItem('@token', token);
  AsyncStorage.setItem('@refreshtoken', refreshToken);
};

export const removeToken = () => {
  AsyncStorage.removeItem('@token');
  AsyncStorage.removeItem('@refreshtoken');
  AsyncStorage.removeItem('persist:gymPoint');
};

export const getExpirationDate = jwtToken => {
  if (!jwtToken) {
    return null;
  }
  const jwt = jwt_decode(jwtToken);

  // multiply by 1000 to convert seconds into milliseconds
  return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

export const isExpired = exp => {
  if (!exp) {
    return false;
  }

  return Date.now() > exp;
};

const getToken = async (refreshToken, api) => {
  try {
    const response = await api.post('refreshToken', {
      refreshToken,
    });

    if (response.data.token) {
      setToken(response.data.token, response.data.refreshToken);
      return response.data.token;
    }
  } catch (err) {
    removeToken();
    RootNavigation.navigate('SignOutToken', {});
  }
};

export const refreshToken = async api => {
  const tokenLocalStorage = await AsyncStorage.getItem('@token');
  const refreshTokenLocalStorage = await AsyncStorage.getItem('@refreshtoken');
  if (isExpired(getExpirationDate(tokenLocalStorage))) {
    const token = await getToken(refreshTokenLocalStorage, api);

    return token;
  }
  return tokenLocalStorage;
};
