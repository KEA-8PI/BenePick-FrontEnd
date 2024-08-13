import { useState } from 'react';
import { GoodsInfoData } from './GoodsInfo.types';

const GoodsInfo = () => {
  const [goodsInfo, setGoodsInfo] = useState<GoodsInfoData>({
    id: null,
    image: null,
    name: '',
    category: '전자기기',
    amounts: 0,
    raffleStartAt: new Date(),
    raffleEndAt: new Date(new Date().setDate(new Date().getDate() + 6)),
    count: 0,
    price: 0,
    discountPrice: 0,
    description: '',
    goodsStatus: '',
  });

  return { goodsInfo, setGoodsInfo };
};

export default GoodsInfo;
