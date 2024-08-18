import PieChart from 'components/pieChart/PieChart';
import { useEffect } from 'react';
import colors from 'theme/variableColors';

const MostWinnedRanks = ({ data }) => {
  const colorMap = [colors.primary, colors.secondary, colors.tertiary, colors.buttonPink, colors.tablePink];

  // mostWinnedRanks 데이터를 기반으로 legendData와 seriesData 생성
  const mostWinnedRanks = data.mostWinnedRanks.mostWonRanks;

  const legendData = mostWinnedRanks.map((item) => {
    const rank = Object.keys(item)[0];
    return {
      name: `${rank}등`,
      icon: 'circle',
    };
  });

  const seriesData = mostWinnedRanks.map((item, index) => {
    const rank = Object.keys(item)[0];
    const value = item[rank];
    return {
      value: parseFloat(value).toFixed(2),
      name: `${rank}등`,
      itemStyle: { color: colorMap[index % colorMap.length] },
    };
  });

  return <PieChart legendData={legendData} seriesData={seriesData} />;
};

export default MostWinnedRanks;
