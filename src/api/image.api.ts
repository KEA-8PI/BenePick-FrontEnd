import httpApi from './http.api';

export const PostImage = (data: FormData) => {
  return httpApi.post('/image', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
