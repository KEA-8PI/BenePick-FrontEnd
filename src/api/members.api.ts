import httpApi from './http.api';

export const GetMemberInfo = () => {
  return httpApi.get('/member/info');
};

export const PatchPassword = (password: string) => {
  return httpApi.patch('/member/password', { password });
};
