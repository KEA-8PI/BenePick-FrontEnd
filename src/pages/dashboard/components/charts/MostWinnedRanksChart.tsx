import PieChart from 'components/pieChart/PieChart';
import colors from 'theme/variableColors';

const MostWinnedRanks = ({ data }) => {
  const colorMap = [colors.primary, colors.secondary, colors.tertiary, colors.buttonPink, colors.tablePink];

  // mostWinnedRanks 데이터를 기반으로 legendData와 seriesData 생성
  const mostWinnedRanks = data.mostWinnedRanks;

  const legendData = mostWinnedRanks.map((item, index) => {
    const rank = Object.keys(item)[index];
    return {
      name: `${rank}등`,
      icon: 'circle',
    };
  });

  const seriesData = mostWinnedRanks.map((item, index) => {
    const rank = Object.keys(item)[index];
    const value = item[rank];
    return {
      value: value,
      name: `${rank}등`,
      itemStyle: { color: colorMap[index % colorMap.length] },
    };
  });

  return <PieChart legendData={legendData} seriesData={seriesData} />;
};

export default MostWinnedRanks;
