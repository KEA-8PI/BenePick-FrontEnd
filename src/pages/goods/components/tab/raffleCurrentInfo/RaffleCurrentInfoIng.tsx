import { forwardRef } from 'react';
import { RaffleCurrentInfoProps } from '../TabContent.types';
import { Typography } from '@mui/material';
import * as S from 'components/common/Components.styles';
import PieChart from 'components/pieChart/PieChart';
import colors from 'theme/variableColors';

// const avgRafflePoint = 26;
// const totalRafflePoint = 765;

const RaffleCurrentInfo = forwardRef<HTMLElement, RaffleCurrentInfoProps>(
  ({ legendData, seriesData, averagePoint, totalPoint }) => {
    // console.log('상태: ', goodsStatus);

    return (
      <S.Wrapper style={{ paddingTop: '20px', width: '100%' }}>
        <S.Row>
          <S.ShadowBox style={{ width: 300, height: 300 }}>
            <PieChart legendData={legendData} seriesData={seriesData} />
          </S.ShadowBox>
          <S.ShadowBox
            style={{ width: 300, height: 300, marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}
            >
              <S.Row>
                <Typography style={{ color: colors.grey02 }}>응모한 복지포인트 평균</Typography>
                <Typography style={{ color: colors.grey02, fontWeight: 'bold', paddingLeft: '5px' }}>
                  {averagePoint}
                </Typography>
              </S.Row>
              <Typography
                style={{ color: colors.grey02, fontWeight: 'bold', paddingTop: '30px', paddingBottom: '30px' }}
              >
                TOP 5
              </Typography>
              {seriesData.map((item, index) => (
                <div key={index}>
                  <S.Row>
                    <Typography style={{ color: item.name === '1등' ? colors.yellow : colors.grey02 }}>
                      {item.name}
                    </Typography>
                    <Typography style={{ color: colors.grey02, paddingLeft: '5px' }}>포인트: {item.value}</Typography>
                  </S.Row>
                </div>
              ))}
              <S.Row style={{ paddingTop: '20px' }}>
                <Typography>총 응모된 포인트</Typography>
                <Typography style={{ fontWeight: 'bold', paddingLeft: '5px' }}>{totalPoint}</Typography>
              </S.Row>
            </div>
          </S.ShadowBox>
        </S.Row>
      </S.Wrapper>
      // </section>
    );
  },
);

export default RaffleCurrentInfo;
