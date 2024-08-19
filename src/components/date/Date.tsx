import { Box } from '@mui/material';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import { CustomCardProps } from 'components/CustomCard/CustomCard.types';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import { deleteDateT } from 'pages/manageGoods/utils/formatData';

const Date: React.FC<CustomCardProps> = ({ info }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Iconify
        icon="lets-icons:date-range"
        sx={{ width: '20px', height: '20px', marginRight: '8px', color: colors.grey01 }}
      />
      <S.Wrapper>
        <C.CardLightFont>{deleteDateT(info.raffleStartAt, true)}</C.CardLightFont>
        <S.Row>
          <C.CardLightFont>~</C.CardLightFont>
          <C.CardLightFont>{deleteDateT(info.raffleEndAt, true)}</C.CardLightFont>
        </S.Row>
      </S.Wrapper>
    </Box>
  );
};

export default Date;
