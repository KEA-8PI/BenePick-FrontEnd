import httpApi from './http.api';

export const GetPointHists = (page: number, size: number) => {
  return httpApi.get(`/point-hists/?page=${page}&size=${size}`);
};
