import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from '../../../components/common/Components.styles';
import * as C from '../../../components/CustomCard/CustomCard.styles';
import { CustomCardProps } from '../../../components/CustomCard/CustomCard.types';
import { Divider, IconButton } from '@mui/material';
import colors from 'theme/variableColors';
import Iconify from 'components/common/Iconify/Iconify';
import Date from 'components/date/Date';
import CardImage from '../../../components/CustomCard/CardImage';

const WishlistCard: React.FC<CustomCardProps> = ({ info, goodsStatus }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div>
      <CardImage info={info} goodsStatus={goodsStatus} style={{ paddingTop: '56.25%' }} />
      <C.CardContent>
        <div style={{ padding: '8px' }}>
          <S.Row>
            <C.CardLightFont>{info.category}</C.CardLightFont>
            <C.CardBoldFont>{info.amounts}</C.CardBoldFont>
          </S.Row>
          {/* 상품 아이디, 상태, 상품 정보 -> 상품 상세 페이지로 전달 */}
          <Link
            to={`/goods/${info.id}?status=${goodsStatus}`}
            style={{ textDecoration: 'none', color: 'black' }}
            state={{ info }}
          >
            <C.CardBoldFont>{info.name}</C.CardBoldFont>
          </Link>
          <Date info={info} goodsStatus={goodsStatus} />
        </div>

        <Divider sx={{ backgroundColor: colors.cardGrey, marginTop: '10px' }} />
        <S.Row>
          <IconButton>
            <Iconify
              icon={like ? 'gridicons:heart' : 'gridicons:heart-outline'}
              onClick={handleLike}
              color={like ? colors.primary : colors.grey01}
              sx={{ width: '20px', height: '20px' }}
            />
          </IconButton>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Iconify
              icon="bi:person"
              sx={{ width: '20px', height: '20px', color: colors.grey01, paddingRight: '4px' }}
            />
            <C.CardLightFont style={{ fontWeight: 'bold' }}>{info.applicant}</C.CardLightFont>
          </div>
        </S.Row>
      </C.CardContent>
    </div>
  );
};

export default WishlistCard;
