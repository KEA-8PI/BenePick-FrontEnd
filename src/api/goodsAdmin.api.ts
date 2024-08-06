import api from './api';

export const PostGoodsUpload = (data) => {
  return api.post('/goods/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const PostGoodsUpdate = (goodsId, data) => {
  return api.post(`/goods/update/${goodsId}`, data);
};

export const PostGoodsAdd = (data) => {
  return api.post('/goods/add', data);
};

export const GetGoodsList = (page: number, size: number, keyword?: string) => {
  return api.get(`/goods/list??page=${page}&size=${size}&keyword=${keyword}`);
};

export const DeleteGoods = (goodsIdList) => {
  return api.delete('/goods/delete/', goodsIdList);
};
