import api from './api';
import httpApi from './http.api';

export const GetGoodsInfo = (goodsId: number) => {
  return httpApi.get(`/goods/${goodsId}`);
};
