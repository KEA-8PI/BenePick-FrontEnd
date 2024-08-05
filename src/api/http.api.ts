import axios from 'axios';

export const baseUrl = () => {
  // return import.meta.env.VITE_BASE_URL;
  return 'http://benepick.kro.kr:10001/';
};

const httpApi = axios.create({
  baseURL: 'http://benepick.kro.kr:10001/',
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

export default httpApi;
