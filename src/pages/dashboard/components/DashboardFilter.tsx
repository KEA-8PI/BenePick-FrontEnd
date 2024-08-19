import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import SelectCategory from 'components/select/SelectCategory';
import * as S from 'components/common/Components.styles';
import * as C from 'components/CustomCard/CustomCard.styles';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import DateCalendar from 'components/dateCalendar/DateCalendar';
import { deleteDateT, formatDateObject } from 'pages/manageGoods/utils/formatData';
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
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 59);
  const [startDate, setStartDate] = useState(formatDateObject(start.toString()));
  const [endDate, setEndDate] = useState(formatDateObject(end.toString()));
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');

  const formatDate = (date: Date) => {
    // Ensure date is formatted as 'YYYY-MM-DD' if that's the expected format
    return date.toISOString().split('T')[0];
  };

  const handleSearchClick = async (startDate: string, endDate: string) => {
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
