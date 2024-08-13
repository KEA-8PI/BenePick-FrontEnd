import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from 'components/common/Components.styles';
import GoodsDetail from '../components/GoodsDetail';

const GoodsView = () => {
  const location = useLocation();
  const info = location.state?.info;

  // 홈페이지에서 상품 상세 페이지로 이동할 때 좋아요 상태때문에 정보를 받아와야함
  useEffect(() => {
    if (info) {
      console.log('Received info:', info);
    } else {
      console.log('No info received');
    }
  }, [info]);

  return (
    <>
      <S.Wrapper>
        <GoodsDetail info={info} />
      </S.Wrapper>
    </>
  );
};

export default GoodsView;
