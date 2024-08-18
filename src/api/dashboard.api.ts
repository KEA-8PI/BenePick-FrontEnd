import httpApi from './http.api';

export const GetDashbordAvgPointsPerRaffle = async (category: string, startDate: string, endDate: string) => {
  const params = {
    category: category === '전체' ? null : category,
    startDate,
    endDate,
  };
  return httpApi.get(`/dashboard/avgWinnerPoints-PerRaffles`, {
    params: params,
  });
};

export const GetDashboardTotalPoints = async (category: string, startDate: string, endDate: string) => {
  const params = {
    category: category === '전체' ? null : category,
    startDate,
    endDate,
  };
  return httpApi.get(`/dashboard/totalPoints-PerRaffles`, {
    params: params,
  });
};

export const GetDashboardRefillRates = async (category: string, startDate: string, endDate: string) => {
  const params = {
    category: category === '전체' ? null : category,
    startDate,
    endDate,
  };
  return httpApi.get(`/dashboard/refillRates-PerRaffles`, {
    params: params,
  });
};

export const GetDashboardMostRanks = async (category: string, startDate: string, endDate: string) => {
  const params = {
    category: category === '전체' ? null : category,
    startDate,
    endDate,
  };
  return httpApi.get(`/dashboard/mostWonRanks`, {
    params: params,
  });
};

export const GetashboardAvgWinnerPoints = async (category: string, startDate: string, endDate: string) => {
  const params = {
    category: category === '전체' ? null : category,
    startDate,
    endDate,
  };
  return httpApi.get(`/dashboard/avgWinnerPoints`, {
    params: params,
  });
};
