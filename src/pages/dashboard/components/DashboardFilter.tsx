import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import SelectCategory from 'components/select/SelectCategory';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import DateCalendar from 'components/dateCalendar/DateCalendar';
import { GetDashboard } from 'api/dashboard.api';
import { deleteDateT, formatDateObject } from 'pages/manageGoods/utils/formatData';

const DashboardFilter = ({
  setDashboardData,
  setLoading,
}: {
  setDashboardData: (data: any) => void;
  setLoading: (loading: boolean) => void;
}) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 59);
  const [startDate, setStartDate] = useState(formatDateObject(start.toString()));
  const [endDate, setEndDate] = useState(formatDateObject(end.toString()));
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');

  const handleSearchClick = async (startDate: string, endDate: string) => {
    setLoading(true);
    setIsOpen(false); // 달력 닫기

    console.log('필터 category:', category);

    try {
      // console.log('선택된 카테고리:', category);
      const response = await GetDashboard(category, startDate, endDate);
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
            <C.CardLightFont>{deleteDateT(startDate).slice(0, 10)}</C.CardLightFont>
            <C.CardLightFont>~{deleteDateT(endDate).slice(0, 10)}</C.CardLightFont>
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
