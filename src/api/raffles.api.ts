import httpApi from './http.api';

export const GetRafflesApplicantList = (goodsId: number) => {
  return httpApi.get(`/raffles/applicant/${goodsId}`);
};
