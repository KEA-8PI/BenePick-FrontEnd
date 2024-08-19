import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import SelectCategory from 'components/select/SelectCategory';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import DateCalendar from 'components/dateCalendar/DateCalendar';
import { formatDate } from 'components/date/Date';
import {
  GetDashbordAvgPointsPerRaffle,
  GetDashboardTotalPoints,
  GetDashboardRefillRates,
  GetDashboardMostRanks,
  GetashboardAvgWinnerPoints,
} from 'api/dashboard.api';
import { convertISOtoKST } from 'pages/manageGoods/utils/formatData';

const DashboardFilter = ({
  setDashboardData,
  setLoading,
}: {
  setDashboardData: (data: any) => void;
  setLoading: (loading: boolean) => void;
}) => {
  const [startDate, setStartDate] = useState(convertISOtoKST(new Date().toISOString().slice(0, 19)));
  const [endDate, setEndDate] = useState(convertISOtoKST(new Date().toISOString().slice(0, 19)));
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');

  const formatDate = (date: Date) => {
    // Ensure date is formatted as 'YYYY-MM-DD' if that's the expected format
    return date.toISOString().split('T')[0];
  };

  const handleSearchClick = async (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Check if startDate and endDate are the same
    if (start.getTime() === end.getTime()) {
      alert('시작일과 종료일은 동일할 수 없습니다. 최소 하루 이상의 날짜 범위를 선택해주세요.');
      return;
    }

    setLoading(true);
    setIsOpen(false);

    try {
      const formattedStartDate = formatDate(new Date(startDate));
      const formattedEndDate = formatDate(new Date(endDate));

      const [avgPointsResponse, totalPointsResponse, refillRatesResponse, mostRanksResponse, avgWinnerPointsResponse] =
        await Promise.all([
          GetDashbordAvgPointsPerRaffle(category, formattedStartDate, formattedEndDate),
          GetDashboardTotalPoints(category, formattedStartDate, formattedEndDate),
          GetDashboardRefillRates(category, formattedStartDate, formattedEndDate),
          GetDashboardMostRanks(category, formattedStartDate, formattedEndDate),
          GetashboardAvgWinnerPoints(category, formattedStartDate, formattedEndDate),
        ]);

      const aggregatedData = {
        avgWinnerPointsPerRaffles: avgPointsResponse.data.result,
        totalPointsPerRaffles: totalPointsResponse.data.result,
        refillRatesPerRaffles: refillRatesResponse.data.result,
        mostWinnedRanks: mostRanksResponse.data.result,
        avgWinnerPoints: avgWinnerPointsResponse.data.result,
      };

      setDashboardData(aggregatedData);
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
            <C.CardLightFont>{convertISOtoKST(startDate)}</C.CardLightFont>
            <C.CardLightFont>~{convertISOtoKST(endDate)}</C.CardLightFont>
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
