import httpApi from './http.api';

export const GetMemberList = async () => {
  try {
    const response = await httpApi.get('/member/list');
    console.log('Get 멤버 목록 response:', response);
    return response;
  } catch (error) {
    console.error('Get 멤버 목록 error:', error);
  }
};

export const PostMemberPointUpload = async (data) => {
  return httpApi.post('/member/point/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const PostMemberUpload = async (data) => {
  return httpApi.post('/member/add/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const PostMemberAdd = async (data) => {
  return httpApi.post('/member/add', data);
};

export const PatchMemberModify = async (
  memberId,
  data: { id: string; deptName: string; name: string; point: number; penaltyCnt: number; role: string },
) => {
  return httpApi.patch(`/member/info/${memberId}`, data);
};
