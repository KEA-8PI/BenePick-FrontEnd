import api from './api';

export const GetGoodsInfo = (goodsId: number) => {
  return api.get(`/goods/${goodsId}`);
};
