import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as S from 'components/common/Components.styles';
import GoodsDetail from '../components/GoodsDetail';

const GoodsView = () => {
  // 현재 위치 객체를 가져옴
  const location = useLocation();

  // 상품 상태를 가져옴
  const searchParams = new URLSearchParams(location.search);
  const goodsStatus = searchParams.get('status');
  // 상품 정보를 가져옴
  const info = location.state?.info;

  return (
    <>
      <S.Wrapper>
        <GoodsDetail info={info} goodsStatus={goodsStatus} />
      </S.Wrapper>
    </>
  );
};

export default GoodsView;
