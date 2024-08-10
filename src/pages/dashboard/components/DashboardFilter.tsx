import { useState } from 'react';
import { Button, Typography, IconButton } from '@mui/material';
import SelectCategory from 'components/select/SelectCategory';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import DateCalendar from 'components/dateCalendar/DateCalendar';
import { formatDate } from 'components/date/Date';

const DashboardFilter = ({ raffleStartAt, raffleEndAt }: { raffleStartAt: Date; raffleEndAt: Date }) => {
  const [startDate, setStartDate] = useState(raffleStartAt);
  const [endDate, setEndDate] = useState(raffleEndAt);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchClick = (startDate: Date, endDate: Date) => {
    setStartDate(startDate);
    setEndDate(endDate);

    // 대시보드 조회 api 호출
    console.log('대시보드 조회');
  };

  return (
    <>
      <S.Row style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SelectCategory />
        </div>

        <S.Row style={{ padding: '4px', display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <Iconify icon="lets-icons:date-range" sx={{ width: '25px', height: '20px', color: colors.grey01 }} />
          </IconButton>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <C.CardLightFont>{formatDate(startDate)}</C.CardLightFont>
            <C.CardLightFont>~{formatDate(endDate)}</C.CardLightFont>
          </div>
        </S.Row>

        <DateCalendar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <div style={{ padding: '5px' }}>
          <Button
            style={{
              backgroundColor: colors.primary,
              color: 'white',
              width: '80px',
              height: '30px',
            }}
            onClick={() => {
              if (startDate && endDate) {
                handleSearchClick(startDate, endDate);
              }
            }}
          >
            탐색하기
          </Button>
        </div>
      </S.Row>
    </>
  );
};

export default DashboardFilter;
