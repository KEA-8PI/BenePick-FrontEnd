import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import SelectCategory from 'components/select/SelectCategory';
import * as S from 'components/common/Components.styles';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';

const DashboardFilter = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSearchClick = (startDate: Date, endDate: Date) => {
    setStartDate(startDate);
    setEndDate(endDate);

    // 대시보드 조회 api 호출
    console.log('대시보드 조회');
  };

  return (
    <>
      <S.Row style={{ justifyContent: 'flex-end' }}>
        <SelectCategory />

        <S.Row style={{ padding: '4px' }}>
          <Iconify
            icon="lets-icons:date-range"
            sx={{
              width: '25px',
              height: '30px',
              color: colors.grey01,
            }}
          />
          <Typography>1</Typography>
          <Typography>~</Typography>
          <Typography>2</Typography>
        </S.Row>

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
