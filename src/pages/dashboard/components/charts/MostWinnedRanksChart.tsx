import PieChart from 'components/pieChart/PieChart';
import colors from 'theme/variableColors';

const MostWinnedRanks = ({ data }) => {
  const legendData = [
    { name: '1등', icon: 'circle' },
    { name: '2등', icon: 'circle' },
    { name: '3등', icon: 'circle' },
    { name: '4등', icon: 'circle' },
    { name: '5등', icon: 'circle' },
  ];
  const seriesData = [
    { value: data.mostWinnedRanks[0], name: '1등', itemStyle: { color: colors.primary } },
    { value: data.mostWinnedRanks[1], name: '2등', itemStyle: { color: colors.secondary } },
    { value: data.mostWinnedRanks[2], name: '3등', itemStyle: { color: colors.tertiary } },
    { value: data.mostWinnedRanks[3], name: '4등', itemStyle: { color: colors.buttonPink } },
    { value: data.mostWinnedRanks[4], name: '5등', itemStyle: { color: colors.tablePink } },
  ];

  return <PieChart legendData={legendData} seriesData={seriesData} />;
};

export default MostWinnedRanks;
