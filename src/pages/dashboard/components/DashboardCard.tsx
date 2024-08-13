import * as S from 'components/common/Components.styles';
import { Typography, Box, Tooltip } from '@mui/material';
import Iconify from 'components/common/Iconify/Iconify';
import colors from 'theme/variableColors';
import AvgWinnerPointsPerRafflesChart from './charts/AvgWinnerPointsPerRaffleChart';
import TotalPointsPerRafflesChart from './charts/TotalPointsPerRafflesChart';
import RefillRatesPerRaffleChart from './charts/RefillRatesPerRaffleChart';
import MostWinnedRanksChart from './charts/MostWinnedRanksChart';
import AvgWinnerPointsChart from './charts/AvgWinnerPointsChart';
import EmptyChart from './charts/EmptyChart';

const DashboardCard = ({ data }) => {
  console.log('DashboardCard data', data);
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
      <Box style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* 1. */}
        <Box style={{ display: 'flex', flexDirection: 'row', padding: '30px 0 10px 0' }}>
          <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>회차별 당첨자 평균 응모 포인트</Typography>
          <Tooltip
            title="회차별로 당첨자들이 응모한 포인트의 평균 수치를 보여줍니다."
            placement="right"
            style={{ padding: '5px 0 0 10px' }}
          >
            <Iconify icon="ph:question-fill" sx={{ width: '20px', height: '20px', color: colors.pinkGrey }} />
          </Tooltip>
        </Box>
        <S.ShadowBox style={{ height: '300px' }}>
          {/* <AvgWinnerPointsPerRafflesChart data={data} /> */}
          {data.avgWinnerPointsPerRaffles && data.avgWinnerPointsPerRaffles.length > 0 ? (
            <AvgWinnerPointsPerRafflesChart data={data} />
          ) : (
            <EmptyChart />
          )}
        </S.ShadowBox>

        {/* 2. */}
        <Box style={{ display: 'flex', flexDirection: 'row', padding: '30px 0 10px 0' }}>
          <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>회차별 총 응모 포인트</Typography>
          <Tooltip
            title="회차별로 응모 참여자들이 응모한 총 포인트 수를 보여줍니다."
            placement="right"
            style={{ padding: '5px 0 0 10px' }}
          >
            <Iconify icon="ph:question-fill" sx={{ width: '20px', height: '20px', color: colors.pinkGrey }} />
          </Tooltip>
        </Box>
        <S.ShadowBox style={{ height: '300px' }}>
          {data.totalPointsPerRaffles && data.totalPointsPerRaffles.length > 0 ? (
            <TotalPointsPerRafflesChart data={data} />
          ) : (
            <EmptyChart />
          )}
        </S.ShadowBox>

        {/* 3. */}
        <Box style={{ display: 'flex', flexDirection: 'row', padding: '30px 0 10px 0' }}>
          <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>회차별 대기 충원율</Typography>
          <Tooltip
            title="회차별로 대기 순번 충원 비율을 보여줍니다."
            placement="right"
            style={{ padding: '5px 0 0 10px' }}
          >
            <Iconify icon="ph:question-fill" sx={{ width: '20px', height: '20px', color: colors.pinkGrey }} />
          </Tooltip>
        </Box>
        <S.ShadowBox style={{ height: '300px' }}>
          {data.refillRatesPerRaffles && data.refillRatesPerRaffles.length > 0 ? (
            <RefillRatesPerRaffleChart data={data} />
          ) : (
            <EmptyChart />
          )}
        </S.ShadowBox>

        {/* 4. */}
        <S.Row>
          <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', padding: '30px 0 10px 0' }}>
              <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>최다 당첨 순위 Top 5</Typography>
              <Tooltip
                title="응모자들 중 가장 많이 당첨된 상위 5순위를 보여줍니다."
                placement="right"
                style={{ padding: '5px 0 0 10px' }}
              >
                <Iconify icon="ph:question-fill" sx={{ width: '20px', height: '20px', color: colors.pinkGrey }} />
              </Tooltip>
            </Box>
            <S.ShadowBox style={{ height: '300px' }}>
              {data.mostWinnedRanks && data.mostWinnedRanks.length > 0 ? (
                <MostWinnedRanksChart data={data} />
              ) : (
                <EmptyChart />
              )}
            </S.ShadowBox>
          </div>

          {/* 5. */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', padding: '30px 0 10px 0' }}>
              <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>당첨자 평균 응모 포인트</Typography>
              <Tooltip
                title="당첨자들의 평균 응모 포인트를 보여줍니다."
                placement="right"
                style={{ padding: '5px 0 0 10px' }}
              >
                <Iconify icon="ph:question-fill" sx={{ width: '20px', height: '20px', color: colors.pinkGrey }} />
              </Tooltip>
            </Box>
            <S.ShadowBox style={{ height: '300px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
              <AvgWinnerPointsChart data={data} />
            </S.ShadowBox>
          </div>
        </S.Row>
      </Box>
    </div>
  );
};

export default DashboardCard;
