import { Box } from '@mui/material';
import * as S from 'components/common/Components.styles';
import { CustomCardProps } from 'components/CustomCard/CustomCard.types';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hour12: false,
  };
  const formattedDate = date.toLocaleString('ko-KR', options);
  return formattedDate.replace(/(\d+)\.(\d+)\.(\d+)\.\s(\w+)\s(\d+:\d+)/, '$1.$2.$3($4) $5');
};

const Date: React.FC<CustomCardProps> = ({ info, goodsStatus }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Iconify
        icon="lets-icons:date-range"
        sx={{ width: '20px', height: '20px', marginRight: '8px', color: colors.grey01 }}
      />
      <S.Wrapper>
        <S.CardLightFont>{formatDate(info.raffleStartAt)}</S.CardLightFont>
        <S.Row>
          <S.CardLightFont>~</S.CardLightFont>
          <S.CardLightFont>{formatDate(info.raffleEndAt)}</S.CardLightFont>
        </S.Row>
      </S.Wrapper>
    </Box>
  );
};

export default Date;
