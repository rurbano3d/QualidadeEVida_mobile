import axios from 'axios';
import { Platform } from 'react-native';

const api = axios.create({
  // baseURL:
  // Platform.OS === 'ios'
  //   ? 'http://localhost:3333'
  //   : 'http://192.168.0.103:3333',
  baseURL: 'https://apiqualidadevida.ddns.net',
});

export default api;
