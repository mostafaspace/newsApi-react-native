import axios from 'axios';

export default function client() {
  const baseURL = 'https://newsapi.org/v2';

  const instance = axios.create();
  instance.defaults.baseURL = baseURL;

  instance.interceptors.request.use(
    async config => {
      // config.params = {apiKey: '90e6c99d412949e3ad53db4b06dc026f'};
      config.params = {apiKey: '8bc009adec3c42edb2a6730a085bcc67'};

      return config;
    },
    error => Promise.reject(error),
  );
  return instance;
}
