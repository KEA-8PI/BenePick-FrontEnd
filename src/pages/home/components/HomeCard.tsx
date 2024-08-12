import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from '../../../components/common/Components.styles';
import * as C from '../../../components/CustomCard/CustomCard.styles';
import { CustomCardProps } from '../../../components/CustomCard/CustomCard.types';
import { Divider, IconButton } from '@mui/material';
import colors from 'theme/variableColors';
import Iconify from 'components/common/Iconify/Iconify';
import Date from 'components/date/Date';
import CardImage from '../../../components/CustomCard/CardImage';
import { useAccountStore } from 'store/useAccountStore';
import { PostAddWishlist, DeleteWishlist } from 'api/wishlists.api';
import { useEffect } from 'react';

const CustomCard: React.FC<CustomCardProps> = ({ info }) => {
  const userID = useAccountStore((state) => state.accountInfo.id);
  const userRole = useAccountStore((state) => state.accountInfo.role);
  // like 상태를 info.wishlist로 초기화
  const [like, setLike] = useState(info.wishlist || false);
  const navigate = useNavigate();

  // 좋아요 정보 상품마다 업데이트
  useEffect(() => {
    setLike(info.wishlist);
  }, [info.wishlist]);

  const handleLike = () => {
    if (!userID) {
      navigate('/login');
      return;
    }

    setLike(!like);
    console.log('like:', like);

    if (!like) {
      PostAddWishlist(info.id)
        .then((res) => {
          console.log('위시리스트 추가 성공:', res.data.result.id);
          console.log('위시리스트 추가한 상품:', res.data.result.goods);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      DeleteWishlist(info.id)
        .then((res) => {
          console.log('위시리스트 삭제 성공:', res.data.result.id);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '300px',
        maxHeight: '450px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardImage info={info} style={{ paddingTop: '56.25%', flex: '0 0 60%' }} />
      <C.CardContent
        style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div style={{ padding: '8px', flex: '1 1 auto' }}>
          <S.Row>
            {/* 일단 category가 null로 설정되어있으면 전체로 써져있게끔 변경 */}
            <C.CardLightFont>#{info.category ? info.category : '전체'}</C.CardLightFont>
            <C.CardBoldFont>{info.amounts}개</C.CardBoldFont>
          </S.Row>
          {/* 상품 아이디, 상태, 상품 정보 -> 상품 상세 페이지로 전달 */}
          <Link
            to={`/goods/${info.id}`}
            style={{ textDecoration: 'none', color: 'black', alignContent: 'center', alignItems: 'center' }}
            state={{ info }}
          >
            <C.CardBoldFont>{info.name}</C.CardBoldFont>
          </Link>

          <Date info={info} />
        </div>

        <Divider sx={{ backgroundColor: colors.cardGrey, marginTop: '10px' }} />
        <S.Row>
          {(userRole === 'MEMBER' || userRole === '') && (
            <IconButton>
              <Iconify
                icon={like ? 'gridicons:heart' : 'gridicons:heart-outline'}
                onClick={handleLike}
                color={like ? colors.primary : colors.grey01}
                sx={{ width: '20px', height: '20px' }}
              />
            </IconButton>
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Iconify
              icon="bi:person"
              sx={{ width: '20px', height: '20px', color: colors.grey01, paddingRight: '4px' }}
            />
            <C.CardLightFont style={{ fontWeight: 'bold' }}>{info.count}명</C.CardLightFont>
          </div>
        </S.Row>
      </C.CardContent>
    </div>
  );
};

export default CustomCard;
