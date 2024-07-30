import React from 'react';
import { Helmet } from 'react-helmet-async';
import GoodsView from './view/GoodsView'; // 중괄호 제거

const Goods = () => {
  return (
    <div>
      <Helmet>
        <title>BenePick | 상품</title>
      </Helmet>

      <GoodsView />
    </div>
  );
};
export default Goods;
