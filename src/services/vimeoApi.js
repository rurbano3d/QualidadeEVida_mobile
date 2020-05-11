import axios from 'axios';

const vimeoApi = axios.create({
  baseURL: 'https://api.vimeo.com/',
});

export default vimeoApi;
