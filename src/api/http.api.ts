import axios from 'axios';

export const baseUrl = () => {
  return 'https://backend.benepick.kro.kr/';
};

const httpApi = axios.create({
  baseURL: 'http://localhost:8080/',
  // baseURL: 'https://backend.benepick.kro.kr/',
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
  withCredentials: true, // 쿠키 기반 인증
});

export default httpApi;
