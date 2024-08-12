import { forwardRef, useEffect, useState } from 'react';
import { RaffleCurrentInfoViewProps } from '../TabContent.types';
import { Divider } from '@mui/material';
import colors from 'theme/variableColors';
import RaffleCurrentInfo from './RaffleCurrentInfoIng';
import RaffleBeforeInfo from './RaffleCurrentInfo';
import { GetRaffleCurrentState } from 'api/raffles.api';

const gradeColors = [
  colors.primary,
  colors.secondary,
  colors.tertiary,
  colors.buttonPink,
  colors.tablePink,
  colors.pinkGrey,
];

const RaffleCurrentInfoView = forwardRef<HTMLElement, RaffleCurrentInfoViewProps>(({ info, goodsStatus }, ref) => {
  const [legendData, setLegendData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [averagePoint, setAveragePoint] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);

  useEffect(() => {
    GetRaffleCurrentState(info)
      .then((res) => {
        const result = res.data.result;
        const currentState = result.currentStateByGoodsDTOList;
        const avgPoint = result.average;
        const total = result.total;

        // legendData와 seriesData를 동적으로 생성
        const newLegendData = currentState.map((item, index) => ({
          name: `${item.grade}등`,
          icon: 'circle',
        }));

        const newSeriesData = currentState.map((item, index) => ({
          value: item.point,
          name: `${item.grade}등`,
          itemStyle: { color: gradeColors[index] },
        }));

        // '그 외' 등급 처리 (등급이 6개 미만일 때)
        if (currentState.length < 6) {
          const otherValue = total - currentState.reduce((acc, item) => acc + item.point, 0);

          // 그 외 등급이 0 이상인 경우에만 추가
          if (otherValue > 0) {
            newLegendData.push({ name: '그 외', icon: 'circle' });
            newSeriesData.push({
              value: otherValue,
              name: '그 외',
              itemStyle: { color: gradeColors[5] },
            });
          }
        }

        setLegendData(newLegendData);
        setSeriesData(newSeriesData);
        setAveragePoint(avgPoint);
        setTotalPoint(total);

        console.log('응모 현황 정보:', res.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [info]);

  return (
    <section ref={ref} style={{ width: '100%' }}>
      <h3 style={{ paddingTop: '40px', paddingLeft: '10px' }}>응모 현황 정보</h3>
      <Divider variant="middle" style={{ width: '100%' }} />
      <div>
        {goodsStatus === 'SCHEDULED' ? (
          <RaffleBeforeInfo />
        ) : (
          <RaffleCurrentInfo
            legendData={legendData}
            seriesData={seriesData}
            averagePoint={averagePoint}
            totalPoint={totalPoint}
          />
        )}
      </div>
    </section>
  );
});

export default RaffleCurrentInfoView;
