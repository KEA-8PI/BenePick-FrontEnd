import httpApi from './http.api';

export const GetGoodsInfo = (goodsId: number) => {
  return httpApi.get(`/goods/${goodsId}`);
};

export const GetSearchGoods = (
  goodsStatus: string,
  page: number,
  size: number,
  sortBy: string,
  keyword?: string,
  category?: string,
) => {
  return httpApi.get(`/goods/search/${goodsStatus}`, {
    params: { page: page, size: size, sortBy: sortBy, keyword, category },
  });
};

export const GetGoodsSeed = (goodsId: number) => {
  return httpApi.get(`/goods/seeds/${goodsId}`);
};
