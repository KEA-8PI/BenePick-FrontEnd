import api from './api';
import httpApi from './http.api';

export const PostLogin = async (id: string, password: string) => {
  return httpApi.post('/auth/login', { id, password });
};

export const PostLogout = async (id: string) => {
  return httpApi.post('/auth/logout', { id });
};
