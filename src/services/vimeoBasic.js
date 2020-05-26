import axios from 'axios';

const vimeoBasic = axios.create({
  baseURL: 'https://player.vimeo.com/video/',
});

export default vimeoBasic;
