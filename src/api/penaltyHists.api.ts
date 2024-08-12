import httpApi from './http.api';

export const GetPenaltyHists = (page: number, size: number) => {
  return httpApi.get(`/penalty-hists/?page=${page}&size=${size}`);
};
