import axios from 'axios';
import { Platform } from 'react-native';
import { refreshToken } from '~/services/RefreshToken';

const api = axios.create({
  // baseURL:
  //   Platform.OS === 'ios'
  //     ? 'http://localhost:3333'
  //     : 'http://192.168.0.101:3333',
  baseURL: 'https://apiqualidadevida.ddns.net',
  // baseURL: 'http://localhost:3333',
});
api.interceptors.request.use(
  async config => {
    if (
      config.url.endsWith('refreshToken') ||
      config.url.endsWith('sessionStudents')
    ) {
      return config;
    }

    const token = await refreshToken(api);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
