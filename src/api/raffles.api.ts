import httpApi from './http.api';

export const GetRafflesApplicantList = (goodsId: number) => {
  return httpApi.get(`/raffles/applicant/${goodsId}`);
};

export const PostRaffleApply = (goodsId: number, point: number) => {
  console.log('PostRaffleApply goodsId:', goodsId);
  console.log('PostRaffleApply point:', point);

  return httpApi.post(`/raffles/apply/${goodsId}`, { point });
};

export const GetMyRafflesList = () => {
  return httpApi.get('/raffles/progress/member');
};
