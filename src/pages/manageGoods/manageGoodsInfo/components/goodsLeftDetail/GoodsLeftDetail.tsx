import GoodsImage from './ModifyGoodsImage';
import ModifyGoodsDate from './ModifyGoodsDate';

const GoodsLeftDetail = ({ image, raffleStartAt, raffleEndAt }) => {
  return (
    <div>
      <GoodsImage imgUrl={image} />
      <ModifyGoodsDate raffleStartAt={raffleStartAt} raffleEndAt={raffleEndAt} />
    </div>
  );
};

export default GoodsLeftDetail;
