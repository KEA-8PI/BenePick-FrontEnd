import httpApi from './http.api';

export const GetWishlists = (goodsStatus: string, page: number, size: number, sortBy: string) => {
  return httpApi.get(`/wishlists/${goodsStatus}`, { params: { page: page, size: size, sortBy: sortBy } });
};

export const PostAddWishlist = (goodsId: number) => {
  return httpApi.post(`/wishlists/add/${goodsId}`);
};

export const DeleteWishlist = (wishlistId: number) => {
  return httpApi.delete(`/wishlists/delete/${wishlistId}`);
};
