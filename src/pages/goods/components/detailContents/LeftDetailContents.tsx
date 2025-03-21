import { useState } from 'react';
import * as S from 'components/common/Components.styles';
import { Typography, IconButton } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import CardImage from 'components/CustomCard/CardImage';
import Date from 'components/date/Date';
import { CustomCardData } from 'components/CustomCard/CustomCard.types';
import { useAccountStore } from 'store/useAccountStore';

interface LeftDetailContentsProps {
  info: CustomCardData;
  like?: boolean;
  handleLike?: () => void;
}

const LeftDetailContents: React.FC<LeftDetailContentsProps> = ({ info, like, handleLike }) => {
  const { accountInfo } = useAccountStore();
  const { role } = accountInfo;

  return (
    <div>
      <CardImage info={info} style={{ width: '300px', height: '216px', marginBottom: '10px' }} />
      <S.Row>
        <Date info={info} />
        {role === 'MEMBER' && info.goodsStatus !== 'COMPLETED' && (
          <IconButton>
            <Iconify
              icon={like ? 'gridicons:heart' : 'gridicons:heart-outline'}
              onClick={handleLike}
              color={like ? colors.primary : colors.grey01}
              sx={{ width: '23px', height: '23px' }}
            />
          </IconButton>
        )}
      </S.Row>

      <S.Row style={{ justifyContent: 'flex-start', alignItems: 'center', paddingTop: '10px' }}>
        <Iconify icon="bi:person" sx={{ width: '20px', height: '22px', color: 'black', paddingRight: '10px' }} />
        <Typography style={{ fontWeight: 'bold', fontSize: '13px' }}>{info.count}명</Typography>
      </S.Row>
    </div>
  );
};

export default LeftDetailContents;
