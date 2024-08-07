import axios from 'axios';
import api from './api';
import httpApi from './http.api';

export const PostLogin = async (id: string, password: string) => {
  return httpApi.post('/auth/login', { id, password });
};

export const PostLogout = async () => {
  return api.post('/auth/logout');
};
