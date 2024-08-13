import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from 'components/common/Components.styles';
import GoodsDetail from '../components/GoodsDetail';

const GoodsView = () => {
  return (
    <S.Wrapper>
      <GoodsDetail />
    </S.Wrapper>
  );
};

export default GoodsView;
