import { forwardRef, useEffect, useState } from 'react';
import { RaffleCurrentInfoViewProps } from '../TabContent.types';
import { Divider } from '@mui/material';
import colors from 'theme/variableColors';
import RaffleCurrentInfo from './RaffleCurrentInfoIng';
import RaffleBeforeInfo from './RaffleCurrentInfo';
import { GetRaffleCurrentState } from 'api/raffles.api';
import * as S from 'components/common/Components.styles';

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
        // 5등까지 표시하고, 나머지는 "그 외"로 처리
        const newLegendData = currentState.slice(0, 5).map((item, index) => ({
          name: `${item.grade}등`,
          icon: 'circle',
        }));

        const newSeriesData = currentState.slice(0, 5).map((item, index) => ({
          value: item.point,
          name: `${item.grade}등`,
          itemStyle: { color: gradeColors[index] },
        }));

        // 6등 이후의 등급을 합산하여 "그 외"로 처리
        const otherPoints = currentState.slice(5).reduce((acc, item) => acc + item.point, 0);

        if (otherPoints > 0) {
          newLegendData.push({ name: '그 외', icon: 'circle' });
          newSeriesData.push({
            value: otherPoints,
            name: '그 외',
            itemStyle: { color: gradeColors[5] },
          });
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
        ) : legendData.length === 0 || seriesData.length === 0 ? (
          <S.Wrapper style={{ paddingTop: '20px', width: '100%', justifyContent: 'center' }}>
            <S.ShadowBox
              style={{ width: 600, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <S.Wrapper style={{ width: '100%', textAlign: 'center' }}>관련된 데이터가 없습니다.</S.Wrapper>
            </S.ShadowBox>
          </S.Wrapper>
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
