import { Box, IconButton } from '@mui/material';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import { formatDate } from 'components/date/Date';
import { useState } from 'react';
import DateCalendar from 'components/dateCalendar/DateCalendar';

const ModifyGoodsDate = ({ raffleStartAt, raffleEndAt }: { raffleStartAt: Date; raffleEndAt: Date }) => {
  const [startDate, setStartDate] = useState(raffleStartAt);
  const [endDate, setEndDate] = useState(raffleEndAt);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <IconButton sx={{ marginRight: '8px' }} onClick={() => setIsOpen(!isOpen)}>
        <Iconify icon="lets-icons:date-range" sx={{ width: '20px', height: '20px', color: colors.grey01 }} />
      </IconButton>

      <S.Wrapper>
        <C.CardLightFont>{formatDate(startDate)}</C.CardLightFont>
        <C.CardLightFont>~{formatDate(endDate)}</C.CardLightFont>
      </S.Wrapper>
      <DateCalendar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </Box>
  );
};

export default ModifyGoodsDate;
