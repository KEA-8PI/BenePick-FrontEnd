import React, { useState } from 'react';
import * as S from '../../../components/common/Components.styles';
import * as C from '../../../components/CustomCard/CustomCard.styles';
import { CustomCardProps } from '../../../components/CustomCard/CustomCard.types';
import { Divider, CardMedia, Chip, Box, IconButton } from '@mui/material';
import colors from 'theme/variableColors';
import Iconify from 'components/common/Iconify/Iconify';
import Date from 'components/date/Date';
import CardImage from '../../../components/CustomCard/CardImage';

const CustomCard: React.FC<CustomCardProps> = ({ info, goodsStatus }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div>
      <CardImage info={info} goodsStatus={goodsStatus} />
      <C.CardContent>
        <div style={{ padding: '8px' }}>
          <S.Row>
            <C.CardLightFont>{info.category}</C.CardLightFont>
            <C.CardBoldFont>{info.amounts}</C.CardBoldFont>
          </S.Row>
          <C.CardBoldFont>{info.name}</C.CardBoldFont>
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

export default CustomCard;
