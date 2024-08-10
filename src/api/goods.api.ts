import api from './api';
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
  let url = `/goods/search/${goodsStatus}?page=${page}&size=${size}&sortBy=${sortBy}`;

  if (keyword) {
    url += `&keyword=${encodeURIComponent(keyword)}`;
  } else if (category) {
    url += `&category=${encodeURIComponent(category)}`;
  } else if (category && keyword) {
    url += `&category=${encodeURIComponent(category)}&keyword=${encodeURIComponent(keyword)}`;
  }

  console.log('GetSearchGoods url:', url);

  return httpApi.get(url);
};

export const GetGoodsSeed = (goodsId: number) => {
  return httpApi.get(`/goods/seeds/${goodsId}`);
};
