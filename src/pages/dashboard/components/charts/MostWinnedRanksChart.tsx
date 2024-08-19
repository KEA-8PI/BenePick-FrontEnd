import PieChart from 'components/pieChart/PieChart';
import colors from 'theme/variableColors';

const MostWinnedRanks = ({ data }) => {
  const colorMap = [colors.primary, colors.secondary, colors.tertiary, colors.buttonPink, colors.tablePink];

  // mostWinnedRanks 데이터를 기반으로 legendData와 seriesData 생성
  const mostWinnedRanks = data.mostWinnedRanks.mostWonRanks;

  // 모든 값을 더하기
  const totalPoints = mostWinnedRanks.reduce((acc, item) => {
    const value = Object.values(item)[0];
    return acc + value;
  }, 0);

  console.log('Total Points:', totalPoints);

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

  // "그 외" 데이터 추가
  if (totalPoints > 0) {
    legendData.push({ name: '그 외', icon: 'circle' });
    seriesData.push({
      value: totalPoints.toFixed(2),
      name: '그 외',
      itemStyle: { color: colors.pinkGrey }, // "그 외"의 색상을 원하는 색상으로 설정
    });
  }

  return <PieChart legendData={legendData} seriesData={seriesData} />;
};

export default MostWinnedRanks;
