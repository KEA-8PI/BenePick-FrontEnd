import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import colors from 'theme/variableColors';

const AvgWinnerPointsPerRafflesChart = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const chartRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const option: echarts.EChartsOption = {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          // 회차별 정보는 어떻게 넣어야할지?
          // 인터페이스 명세서에는 일단 회차 관련 정보가 없음
          data: ['1회차', '2회차', '3회차', '4회차', '5회차'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: data.avgWinnerPointsPerRaffles,
            type: 'line',
            lineStyle: {
              color: colors.secondary,
            },
            itemStyle: {
              color: colors.secondary,
            },
          },
        ],
      };
      myChart.setOption(option);

      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default AvgWinnerPointsPerRafflesChart;
