import httpApi from './http.api';

export const GetMemberList = (page: number, size: number, keywordName?: string) => {
  const url = keywordName
    ? `/member/list?page=${page}&size=${size}&keywordName=${keywordName}`
    : `/member/list?page=${page}&size=${size}`;
  return httpApi.get(url);
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

export const DeleteMember = (memberList: string[]) => {
  return httpApi.delete(`/member/?memberList=${memberList}`);
};
