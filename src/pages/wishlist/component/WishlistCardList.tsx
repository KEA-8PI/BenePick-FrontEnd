import React from 'react';
import * as S from 'components/common/Components.styles';
import * as C from '../../../components/CustomCard/CustomCard.styles';
import WishlistCard from './WishlistCard';
import { HomeCardPageProps } from 'components/CustomCard/CustomCard.types';

const WishlistCardList: React.FC<HomeCardPageProps> = ({ goodsStatus }) => {
  // goodsStatus: 상품 응모 상태, id: 상품 아이디, name: 상품명, category: 카테고리, amounts: 상품 수량, raffleStartAt: 응모 시작일,raffleEndAt: 응모 종료일, applicant: 응모자 수
  const generateRandomId = () => Math.floor(Math.random() * 1000000);

  const cardInfo = [
    {
      id: generateRandomId(),
      image: '/images/card/product1.png',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트 MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트 MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 00:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      count: 100,
      price: 1300000,
      discountPrice: 999000,
      goodsStatus: goodsStatus,
    },
    {
      id: generateRandomId(),
      image: '/images/card/product2.png',
      name: '티웨어 항공권',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 00:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      count: 100,
      price: 1300000,
      discountPrice: 999000,
      goodsStatus: goodsStatus,
    },
    {
      id: generateRandomId(),
      image: '/images/card/product3.png',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 00:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      count: 100,
      price: 1300000,
      discountPrice: 999000,
      goodsStatus: goodsStatus,
    },
    {
      id: generateRandomId(),
      image: '/images/card/product1.png',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 00:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      count: 100,
      price: 1300000,
      discountPrice: 999000,
      goodsStatus: goodsStatus,
    },
    {
      id: generateRandomId(),
      image: '/images/card/product2.png',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 00:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      count: 100,
      price: 1300000,
      discountPrice: 999000,
      goodsStatus: goodsStatus,
    },
    {
      id: generateRandomId(),
      image: '/images/card/product3.png',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 00:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      count: 100,
      price: 1300000,
      discountPrice: 999000,
      goodsStatus: goodsStatus,
    },
    {
      id: generateRandomId(),
      image: '/images/card/product1.png',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 00:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      count: 100,
      price: 1300000,
      discountPrice: 999000,
      goodsStatus: goodsStatus,
    },
    {
      id: generateRandomId(),
      image: '/images/card/product2.png',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 00:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      count: 100,
      price: 1300000,
      discountPrice: 999000,
      goodsStatus: goodsStatus,
    },
    {
      id: generateRandomId(),
      image: '/images/card/product3.png',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 00:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      count: 100,
      price: 1300000,
      discountPrice: 999000,
      goodsStatus: goodsStatus,
    },
  ];

  return (
    <C.CardContainer>
      {cardInfo.map((info, index) => (
        <C.Card key={index}>
          <S.ShadowBox padding="0">
            <WishlistCard info={info} />
          </S.ShadowBox>
        </C.Card>
      ))}
    </C.CardContainer>
  );
};

export default WishlistCardList;
