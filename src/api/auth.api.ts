import httpApi from './http.api';

export const PostLogin = async (id: string, password: string) => {
  return httpApi.post('/auth/login', { id, password });
};

export const PostLogout = async () => {
  return httpApi.post('/auth/logout', {});
};
