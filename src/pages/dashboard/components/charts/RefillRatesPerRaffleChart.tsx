import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import colors from 'theme/variableColors';

const RefillRatesPerRaffleChart = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const chartRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const xAxisData = data.refillRatesPerRaffles.refillRatesPerRaffles.map((_, index) => `${index + 1}회차`);
      const option: echarts.EChartsOption = {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: data.refillRatesPerRaffles.refillRatesPerRaffles,
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

export default RefillRatesPerRaffleChart;
