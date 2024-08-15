import axios from 'axios';

export const baseUrl = () => {
  // return import.meta.env.VITE_BASE_URL;
  // return 'http://benepick.kro.kr:10001/';
  // return 'http://localhost:8080/';
  return 'https://benepick.o-r.kr/';
};

const httpApi = axios.create({
  // baseURL: 'http://benepick.kro.kr:10001/',
  // baseURL: 'http://localhost:8080/',
  baseURL: 'https://backend.benepick.kro.kr/',
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
  withCredentials: true, // 쿠키 기반 인증
});

export default httpApi;
