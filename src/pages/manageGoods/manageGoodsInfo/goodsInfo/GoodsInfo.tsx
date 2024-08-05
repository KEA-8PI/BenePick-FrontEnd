import { useState } from 'react';
import { GoodsInfoData } from './GoodsInfo.types';

const GoodsInfo = () => {
  const [goodsInfo, setGoodsInfo] = useState<GoodsInfoData>({
    id: null,
    image: '',
    name: '',
    category: '',
    amounts: 0,
    raffleStartAt: new Date(),
    raffleEndAt: new Date(),
    applicant: 0,
    price: 0,
    discountPrice: 0,
    description: '',
  });

  const updateGoodsInfo = (key: string, value: string | number | Date) => {
    //특정 key에 대한 value를 업데이트하는 함수
    setGoodsInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { goodsInfo, setGoodsInfo, updateGoodsInfo };
};
export default GoodsInfo;
