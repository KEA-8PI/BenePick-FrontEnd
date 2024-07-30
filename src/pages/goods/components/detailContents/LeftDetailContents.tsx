import * as S from 'components/common/Components.styles';
import { Typography } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';

import CardImage from 'components/CustomCard/CardImage';
import Date from 'components/date/Date';

const LeftDetailContents = ({ goodsStatus, info }) => {
  return (
    <div>
      <CardImage
        info={info}
        goodsStatus={goodsStatus}
        style={{ width: '300px', height: '216px', marginBottom: '10px' }}
      />
      <Date info={info} goodsStatus={goodsStatus} />
      <S.Row style={{ justifyContent: 'flex-start', alignItems: 'center', paddingTop: '10px' }}>
        <Iconify icon="bi:person" sx={{ width: '20px', height: '20px', color: 'black', paddingRight: '10px' }} />
        <Typography style={{ fontWeight: 'bold', fontSize: '13px' }}>{info.applicant}</Typography>
      </S.Row>
    </div>
  );
};

export default LeftDetailContents;
