import React from 'react';
import * as S from 'components/common/Components.styles';
import * as C from '../../../components/CustomCard/CustomCard.styles';
import HomeCard from 'pages/home/components/HomeCard';
import { HomeCardPageProps } from 'components/CustomCard/CustomCard.types';

const HomeCardPage: React.FC<HomeCardPageProps> = ({ data }) => {
  // goodsStatus: 상품 응모 상태, id: 상품 아이디, name: 상품명, category: 카테고리, amounts: 상품 수량, raffleStartAt: 응모 시작일,raffleEndAt: 응모 종료일, applicant: 응모자 수

  return (
    <C.CardContainer>
      {data.map((info, index) => (
        <C.Card key={index}>
          <S.ShadowBox padding="0">
            <HomeCard info={info} />
          </S.ShadowBox>
        </C.Card>
      ))}
    </C.CardContainer>
  );
};

export default HomeCardPage;
