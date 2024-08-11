import { forwardRef } from 'react';
import { RaffleCurrentInfoViewProps } from '../TabContent.types';
import { Divider } from '@mui/material';
import colors from 'theme/variableColors';
import RaffleCurrentInfo from './RaffleCurrentInfoIng';
import RaffleBeforeInfo from './RaffleCurrentInfo';

const legendData = [
  { name: '1등', icon: 'circle' },
  { name: '2등', icon: 'circle' },
  { name: '3등', icon: 'circle' },
  { name: '4등', icon: 'circle' },
  { name: '5등', icon: 'circle' },
  { name: '그 외', icon: 'circle' },
];

const seriesData = [
  { value: 200, name: '1등', itemStyle: { color: colors.primary } },
  { value: 158, name: '2등', itemStyle: { color: colors.secondary } },
  { value: 120, name: '3등', itemStyle: { color: colors.tertiary } },
  { value: 114, name: '4등', itemStyle: { color: colors.buttonPink } },
  { value: 93, name: '5등', itemStyle: { color: colors.tablePink } },
  { value: 80, name: '그 외', itemStyle: { color: colors.pinkGrey } },
];

// const avgRafflePoint = 26;
// const totalRafflePoint = 765;

const RaffleCurrentInfoView = forwardRef<HTMLElement, RaffleCurrentInfoViewProps>(({ goodsStatus }, ref) => {
  // console.log('상태: ', goodsStatus);

  return (
    <section ref={ref} style={{ width: '100%' }}>
      <h3 style={{ paddingTop: '40px', paddingLeft: '10px' }}>응모 현황 정보</h3>
      <Divider variant="middle" style={{ width: '100%' }} />
      <div>
        {goodsStatus === 'SCHEDULED' ? (
          <RaffleBeforeInfo />
        ) : (
          <RaffleCurrentInfo legendData={legendData} seriesData={seriesData} />
        )}
      </div>
    </section>
  );
});

export default RaffleCurrentInfoView;
