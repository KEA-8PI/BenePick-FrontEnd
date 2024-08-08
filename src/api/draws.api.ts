import api from './api';

export const GetDrawsResultExport = (goodsId: number) => {
  return api.get(`/draws/download/${goodsId}`);
};
