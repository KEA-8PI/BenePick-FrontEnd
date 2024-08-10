import GoodsImage from './ModifyGoodsImage';
import ModifyGoodsDate from './ModifyGoodsDate';
import { useEffect } from 'react';

const GoodsLeftDetail = ({ image, raffleStartAt, raffleEndAt, setGoodsInfo }) => {
  return (
    <div>
      <GoodsImage imgUrl={image} setState={setGoodsInfo} />
      <ModifyGoodsDate raffleStartAt={raffleStartAt} raffleEndAt={raffleEndAt} setState={setGoodsInfo} />
    </div>
  );
};

export default GoodsLeftDetail;
