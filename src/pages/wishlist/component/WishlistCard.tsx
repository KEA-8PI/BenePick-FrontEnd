import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from '../../../components/common/Components.styles';
import * as C from '../../../components/CustomCard/CustomCard.styles';
import { CustomCardProps } from '../../../components/CustomCard/CustomCard.types';
import { Divider, IconButton } from '@mui/material';
import colors from 'theme/variableColors';
import Iconify from 'components/common/Iconify/Iconify';
import Date from 'components/date/Date';
import CardImage from '../../../components/CustomCard/CardImage';
import { PostAddWishlist, DeleteWishlist } from 'api/wishlists.api';

const WishlistCard: React.FC<CustomCardProps> = ({ info }) => {
  useEffect(() => {
    console.log('WishlistCard info:', info);
  }, [info]);

  const [like, setLike] = useState(false);

  // 좋아요 버튼 클릭 시 위시리스트 삭제 api 호출
  const handleLike = () => {
    setLike(!like);
    console.log('like:', like);
    DeleteWishlist(info.id)
      .then((res) => {
        console.log(res);
        console.log('위시리스트 삭제 성공:', res.data.result.id);
        console.log('위시리스트 삭제한 상품:', res.data.result.goods);
      })
      .catch((err) => {
        console.error(err);
      });
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
            <C.CardLightFont>#{info.category}</C.CardLightFont>
            <C.CardBoldFont>{info.amounts}개</C.CardBoldFont>
          </S.Row>
          {/* 상품 아이디, 상태, 상품 정보 -> 상품 상세 페이지로 전달 */}
          <Link
            to={`/goods/${info.goodId}`}
            style={{ textDecoration: 'none', color: 'black', alignContent: 'center', alignItems: 'center' }}
            state={{ info }}
          >
            <C.CardBoldFont>{info.name}</C.CardBoldFont>
          </Link>
          <Date info={info} />
        </div>
        <Divider sx={{ backgroundColor: colors.cardGrey, marginTop: '10px' }} />
        <S.Row>
          <IconButton>
            <Iconify
              icon={like ? 'gridicons:heart-outline' : 'gridicons:heart'}
              onClick={handleLike}
              color={like ? colors.grey01 : colors.primary}
              sx={{ width: '20px', height: '20px' }}
            />
          </IconButton>
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

export default WishlistCard;
