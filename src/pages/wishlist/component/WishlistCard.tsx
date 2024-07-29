import React, { useState } from 'react';
import * as S from '../../../components/common/Components.styles';
import { CustomCardProps } from '../../../components/CustomCard/CustomCard.types';
import { Divider, CardMedia, Chip, Box, IconButton } from '@mui/material';
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
      <CardImage info={info} goodsStatus={goodsStatus} />
      <S.CardContent>
        <div style={{ padding: '8px' }}>
          <S.Row>
            <S.CardLightFont>{info.category}</S.CardLightFont>
            <S.CardBoldFont>{info.amounts}</S.CardBoldFont>
          </S.Row>
          <S.CardBoldFont>{info.name}</S.CardBoldFont>
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
            <S.CardLightFont style={{ fontWeight: 'bold' }}>{info.applicant}</S.CardLightFont>
          </div>
        </S.Row>
      </S.CardContent>
    </div>
  );
};

export default WishlistCard;
