import Iconify from 'components/common/Iconify/Iconify';
import { IconButton, Typography } from '@mui/material';
import colors from 'theme/variableColors';
import * as S from 'components/common/Components.styles';

const AvgWinnerPointsChart = ({ data }) => {
  const formattedPoints = data.avgWinnerPoints.avgWinnerPoints.toFixed(2).toLocaleString();
  return (
    <S.Wrapper>
      <Iconify
        icon="ph:coins"
        sx={{
          width: '120px',
          height: '88px',
          color: colors.yellow,
        }}
      />
      <S.Row style={{ paddingTop: '20px' }}>
        <Typography style={{ color: colors.yellow, fontSize: '35px', fontWeight: 'bold', paddingRight: '10px' }}>
          {formattedPoints}
        </Typography>
        <Typography style={{ fontSize: '35px' }}>포인트</Typography>
      </S.Row>
    </S.Wrapper>
  );
};

export default AvgWinnerPointsChart;
