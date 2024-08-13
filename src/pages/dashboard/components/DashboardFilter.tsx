import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import SelectCategory from 'components/select/SelectCategory';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import DateCalendar from 'components/dateCalendar/DateCalendar';
import { formatDate } from 'components/date/Date';
import { GetDashboard } from 'api/dashboard.api';

// 유효한 날짜인지 확인하는 함수
const isValidDate = (date: Date) => {
  return date instanceof Date && !isNaN(date.getTime());
};

const DashboardFilter = ({
  raffleStartAt,
  raffleEndAt,
  setDashboardData,
  setLoading,
}: {
  raffleStartAt: Date;
  raffleEndAt: Date;
  setDashboardData: (data: any) => void;
  setLoading: (loading: boolean) => void;
}) => {
  const [startDate, setStartDate] = useState(raffleStartAt);
  const [endDate, setEndDate] = useState(raffleEndAt);
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');

  const handleSearchClick = async (startDate: Date, endDate: Date) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setLoading(true);
    setIsOpen(false); // 달력 닫기

    // Format dates to 'YYYY-MM-DDTHH:mm:ss'
    const formattedStartDate = startDate.toISOString().slice(0, 19);
    const formattedEndDate = endDate.toISOString().slice(0, 19);

    console.log('formattedStartDate:', formattedStartDate);
    console.log('formattedEndDate:', formattedEndDate);
    console.log('필터 category:', category);

    try {
      // console.log('선택된 카테고리:', category);
      const response = await GetDashboard(category, formattedStartDate, formattedEndDate);
      console.log('Dashboard data:', response.data.result);
      setDashboardData(response.data.result); // API에서 받은 데이터를 부모 컴포넌트로 전달
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <S.Row style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SelectCategory setCategory={setCategory} />
        </div>

        <S.Row style={{ padding: '4px', display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <Iconify icon="lets-icons:date-range" sx={{ width: '25px', height: '20px', color: colors.grey01 }} />
          </IconButton>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <C.CardLightFont>{isValidDate(startDate) ? formatDate(startDate) : '시작일'}</C.CardLightFont>
            <C.CardLightFont>~{isValidDate(endDate) ? formatDate(endDate) : '종료일'}</C.CardLightFont>
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
