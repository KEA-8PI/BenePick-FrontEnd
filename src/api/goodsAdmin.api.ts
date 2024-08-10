import api from './api';
import httpApi from './http.api';

export const PostGoodsUpload = (data) => {
  return httpApi.post('/goods/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const PostGoodsUpdate = (goodsId, data) => {
  return httpApi.post(`/goods/update/${goodsId}`, data);
};

export const PostGoodsAdd = (data) => {
  return httpApi.post('/goods/add', data);
};

export const GetGoodsList = (page: number, size: number, keyword?: string) => {
  const url = keyword
    ? `/goods/list?page=${page}&size=${size}&keyword=${keyword}`
    : `/goods/list?page=${page}&size=${size}`;
  return httpApi.get(url);
};

export const DeleteGoods = (goodsIdList) => {
  return httpApi.delete(`/goods/delete?deleteList=${goodsIdList}`);
};
