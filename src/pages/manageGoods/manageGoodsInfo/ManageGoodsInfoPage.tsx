import * as S from 'components/common/Components.styles';
import * as G from './ManageGoodsInfo.styles';
import colors from 'theme/variableColors';
import { Helmet } from 'react-helmet-async';
import { ColumnBox } from './ManageGoodsInfo.styles';
import { InputAdornment, Typography } from '@mui/material';
import ModifyCategory from './components/goodsInfoCategory/ModifyCategory';
import { useEffect, useState } from 'react';
import GoodsLeftDetail from './components/goodsLeftDetail/GoodsLeftDetail';
import GoodsInfo from './goodsInfo/GoodsInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { GetGoodsInfo } from 'api/goods.api';
import { PostGoodsAdd, PostGoodsUpdate } from 'api/goodsAdmin.api';
import { GoodsInfoData } from './goodsInfo/GoodsInfo.types';
import { useToggle } from 'hooks/useToggle';
import CustomModal from 'components/CustomModal/CustomModal';

const labelList = ['상품이름', '상품코드', '카테고리', '개수', '정가', '할인가', '상세설명'];

const ManageGoodsPage = () => {
  const params = useParams();
  const goodsId = Number(params.id);

  const { goodsInfo, setGoodsInfo } = GoodsInfo();

  const filterGoodsInfo = (goodsInfo) => {
    const { count, ...filteredGoodsInfo } = goodsInfo;
    return filteredGoodsInfo;
  };

  const confirmToggle = useToggle();
  const navigate = useNavigate();

  useEffect(() => {
    goodsId &&
      GetGoodsInfo(goodsId)
        .then((res) => {
          console.log('상품정보', res.data.result);
          setGoodsInfo(filterGoodsInfo(res.data.result));
        })
        .catch((error) => {
          console.error(error);
          window.location.href = '/*';
        });
  }, [goodsId, setGoodsInfo]);

  const handleKeyDown = (event) => {
    if (['-', '.', 'e'].includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleNumberChange = (key: string, event) => {
    const value = event.target.value;
    if (!/^\d*$/.test(value)) {
      event.preventDefault();
    } else {
      setGoodsInfo((prev) => ({ ...prev, [key]: Number(value) }));
    }
  };

  const handleSave = () => {
    console.log('수정', goodsInfo);
    if (goodsId) {
      PostGoodsUpdate(goodsId, goodsInfo);
    } else PostGoodsAdd(goodsInfo);
    confirmToggle.toggle();
  };

  const confirmModalConfig = {
    open: confirmToggle.isOpen,
    onClose: confirmToggle.toggle,
    contents: <Typography variant="h6">완료되었습니다.</Typography>,
    buttons: {
      label: '확인',
      action: () => {
        confirmToggle.toggle();
        navigate('/manageGoods');
      },
    },
  };

  return (
    <S.Wrapper>
      <Helmet>
        <title>BenePick | 상품 정보 관리</title>
      </Helmet>
      <h2 style={{ width: '100%' }}>상품 관리 페이지</h2>
      <S.Row width={95} style={{ justifyContent: 'flex-end' }}>
        <S.CustomButton
          style={{ backgroundColor: colors.secondary, marginBottom: '10px' }}
          onClick={handleSave}
          disabled={
            goodsInfo.name === '' ||
            goodsInfo.amounts === 0 ||
            goodsInfo.image === '' ||
            goodsInfo.discountPrice > goodsInfo.price
          }
        >
          완료
        </S.CustomButton>
      </S.Row>
      <S.Row width={95}>
        <GoodsLeftDetail
          image={goodsInfo.image}
          raffleStartAt={goodsInfo.raffleStartAt}
          raffleEndAt={goodsInfo.raffleEndAt}
          setGoodsInfo={setGoodsInfo}
        />
        <S.Row width={65}>
          <div>
            {labelList.map((label, index) => (
              <ColumnBox key={label} style={{ height: index === 6 && '180px' }}>
                {label}
              </ColumnBox>
            ))}
          </div>
          <div style={{ marginLeft: '10px' }}>
            <G.GoodsInfoTextField
              value={goodsInfo.name}
              inputProps={{ maxLength: 50 }}
              onChange={(e) => setGoodsInfo((prev) => ({ ...prev, ['name']: e.target.value }))}
            />
            <G.GoodsInfoTextField value={goodsInfo.id || '입력하지 않아도 되는 값입니다.'} disabled={true} />
            <G.CategoryContainer>
              <ModifyCategory category={goodsInfo.category} setGoodsInfo={setGoodsInfo} />
            </G.CategoryContainer>
            <G.GoodsInfoTextField
              value={goodsInfo.amounts}
              type="number"
              onKeyDown={handleKeyDown}
              onChange={(e) => handleNumberChange('amounts', e)}
            />
            <G.GoodsInfoTextField
              value={goodsInfo.price}
              type="number"
              onKeyDown={handleKeyDown}
              onChange={(e) => handleNumberChange('price', e)}
              InputProps={{
                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
              }}
            />
            <G.GoodsInfoTextField
              value={goodsInfo.discountPrice}
              type="number"
              onKeyDown={handleKeyDown}
              onChange={(e) => handleNumberChange('discountPrice', e)}
              InputProps={{
                startAdornment: <InputAdornment position="start">₩</InputAdornment>,
              }}
            />
            <G.GoodsInfoTextField
              value={goodsInfo.description || ''}
              multiline
              inputProps={{ maxLength: 255 }}
              rows={6}
              sx={{ '& .MuiOutlinedInput-root': { height: '180px' } }}
              onChange={(e) => setGoodsInfo((prev) => ({ ...prev, ['description']: e.target.value }))}
            />
          </div>
        </S.Row>
      </S.Row>
      <CustomModal modalConfig={confirmModalConfig} />
    </S.Wrapper>
  );
};

export default ManageGoodsPage;
