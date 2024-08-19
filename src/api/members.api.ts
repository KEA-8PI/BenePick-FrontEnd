import httpApi from './http.api';

export const GetMemberInfo = () => {
  return httpApi.get('/member/info');
};

export const PatchPassword = (password: string, newPassword: string) => {
  return httpApi.patch('/member/password', { password, newPassword });
};

export const GetMemberPoint = async () => {
  return httpApi.get('/member/point');
};
