import * as S from 'components/common/Components.styles';
import * as G from './ManageGoodsInfo.styles';
import colors from 'theme/variableColors';
import { Helmet } from 'react-helmet-async';
import { ColumnBox } from './ManageGoodsInfo.styles';
import { InputAdornment } from '@mui/material';
import ModifyCategory from './components/goodsInfoCategory/ModifyCategory';
import { useEffect, useState } from 'react';
import GoodsLeftDetail from './components/goodsLeftDetail/GoodsLeftDetail';
import GoodsInfo from './goodsInfo/GoodsInfo';
import { GoodsInfoData } from './goodsInfo/GoodsInfo.types';

const labelList = ['상품이름', '상품코드', '카테고리', '개수', '정가', '할인가', '상세설명'];

const ManageGoodsPage = () => {
  const { goodsInfo, setGoodsInfo, updateGoodsInfo } = GoodsInfo();
  // const [goodsInfo, setGoodsInfo] = useState<GoodsInfoData>();
  const [category, setCategory] = useState(goodsInfo.category || '전자기기');

  useEffect(() => {
    setGoodsInfo({
      id: 1,
      image: '/images/card/product1.png',
      name: 'MacBook Air 15 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트',
      category: '전자기기',
      amounts: 3,
      raffleStartAt: new Date('2024.7.17(수) 02:00'),
      raffleEndAt: new Date('2024.7.31(수) 13:00'),
      applicant: 100,
      price: 1300000,
      discountPrice: 999000,
      description:
        '품명 및 모델명	Apple 2023년 맥북에어15 M2 칩셋 8코어 CPU, 10코어 GPU, 8GB RAM, 256GB SSD, 영문자판, 35W 듀얼 어댑터, 스페이스그레이 (Z18L0001Q) /A2941	KC 인증정보	R-C-APL-A2941, XU101984-23020 정격전압, 소비전력	100 ~ 240V / 업체미제공	에너지소비효율등급	해당없음출시년월	업체미제공	제조자(수입자)	애플 / 애플코리아유한회사',
    });
    // console.log('상품정보', goodsInfo);
  }, [goodsInfo]);

  const handleKeyDown = (event) => {
    if (['-', '.', 'e'].includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (!/^\d*$/.test(value)) {
      event.preventDefault();
    }
  };

  return (
    <S.Wrapper>
      <Helmet>
        <title>BenePick | 상품 정보 관리</title>
      </Helmet>
      <h2 style={{ width: '100%' }}>상품 관리 페이지</h2>
      <S.Row width={95} style={{ justifyContent: 'flex-end' }}>
        <S.CustomButton style={{ backgroundColor: colors.secondary, marginBottom: '10px' }}>완료</S.CustomButton>
      </S.Row>
      <S.Row width={95}>
        <GoodsLeftDetail
          image={goodsInfo.image}
          raffleStartAt={goodsInfo.raffleStartAt}
          raffleEndAt={goodsInfo.raffleEndAt}
        />
        <S.Row width={65}>
          <div>
            {labelList.map((label, index) => (
              <ColumnBox key={label} style={{ height: index === 6 && '171px' }}>
                {label}
              </ColumnBox>
            ))}
          </div>
          <div style={{ marginLeft: '10px' }}>
            <G.GoodsInfoTextField value={goodsInfo.name || ''} />
            <G.GoodsInfoTextField value={goodsInfo.id || ''} disabled={true} />
            <G.CategoryContainer>
              <ModifyCategory category={category} setCategory={setCategory} />
            </G.CategoryContainer>
            <G.GoodsInfoTextField
              value={goodsInfo.amounts || ''}
              type="number"
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
            <G.GoodsInfoTextField
              value={goodsInfo.price || ''}
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
              }}
            />
            <G.GoodsInfoTextField
              value={goodsInfo.discountPrice || ''}
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
              }}
            />
            <G.GoodsInfoTextField
              value={goodsInfo.description || ''}
              multiline
              inputProps={{ maxLength: 255 }}
              rows={6}
              sx={{ '& .MuiOutlinedInput-root': { height: '171px' } }}
            />
          </div>
        </S.Row>
      </S.Row>
    </S.Wrapper>
  );
};

export default ManageGoodsPage;
