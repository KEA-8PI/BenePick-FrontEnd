import api from './api';

export const PostImage = (data: FormData) => {
  return api.post('/image', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
