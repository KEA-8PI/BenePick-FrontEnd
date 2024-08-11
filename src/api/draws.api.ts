import httpApi from './http.api';

export const GetDrawsWinnerList = (goodsId: number) => {
  return httpApi.get(`/draws/winners/${goodsId}`);
};

export const GetDrawsWaitList = (goodsId: number) => {
  return httpApi.get(`/draws/waitlist/${goodsId}`);
};

export const PatchDrawsWinner = (winnersId: number, status) => {
  return httpApi.patch(`/draws/winners/edit/${winnersId}`, { status });
};

export const GetDrawVerification = (goodsId: number, seed: string) => {
  return httpApi.get(`/draws/verification/${goodsId}`, { params: { seed } });
};

export const GetDrawList = (goodsId: number) => {
  return httpApi.get(`/draws/result/${goodsId}`);
};
