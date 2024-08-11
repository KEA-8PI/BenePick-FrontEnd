import httpApi from './http.api';

export const GetDashboard = async (category: string, startDate: string, endDate: string) => {
  const params = {
    category: category === '전체' ? null : category,
    startDate,
    endDate,
  };
  return httpApi.get(`/dashboard`, {
    params: params,
  });
};
