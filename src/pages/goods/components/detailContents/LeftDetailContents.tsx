import { useState } from 'react';
import * as S from 'components/common/Components.styles';
import { Typography, IconButton } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';

import CardImage from 'components/CustomCard/CardImage';
import Date from 'components/date/Date';

const LeftDetailContents = ({ goodsStatus, info }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div>
      <CardImage
        info={info}
        goodsStatus={goodsStatus}
        style={{ width: '300px', height: '216px', marginBottom: '10px' }}
      />
      <S.Row>
        <Date info={info} goodsStatus={goodsStatus} />
        {handleLike && (
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
