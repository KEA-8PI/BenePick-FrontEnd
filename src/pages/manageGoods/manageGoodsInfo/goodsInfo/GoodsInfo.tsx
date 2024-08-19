import { useState } from 'react';
import { GoodsInfoData } from './GoodsInfo.types';
import { formatDateObject } from 'pages/manageGoods/utils/formatData';

const GoodsInfo = () => {
  const raffleStartAt = new Date();
  raffleStartAt.setDate(raffleStartAt.getDate() + 1);
  raffleStartAt.setHours(0, 0, 0, 0); // UTC 기준으로 시간 설정

  // 일주일 뒤 한국 시간 23:59 설정
  const raffleEndAt = new Date();
  raffleEndAt.setDate(raffleEndAt.getDate() + 7);
  raffleEndAt.setHours(23, 59, 59, 999);

  const [goodsInfo, setGoodsInfo] = useState<GoodsInfoData>({
    id: null,
    image: null,
    name: '',
    category: '전자기기',
    amounts: 0,
    raffleStartAt: formatDateObject(raffleStartAt),
    raffleEndAt: formatDateObject(raffleEndAt),
    count: 0,
    price: 0,
    discountPrice: 0,
    description: '',
    goodsStatus: '',
  });

  return { goodsInfo, setGoodsInfo };
};

export default GoodsInfo;
