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
  const url = keyword
    ? `/goods/list?page=${page}&size=${size}&keyword=${keyword}`
    : `/goods/list?page=${page}&size=${size}`;
  return api.get(url);
};

export const DeleteGoods = (goodsIdList) => {
  return api.delete(`/goods/delete?deleteList=${goodsIdList}`);
};
