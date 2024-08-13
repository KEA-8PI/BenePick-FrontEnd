import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const PieChart = ({ legendData, seriesData }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const option: echarts.EChartsOption = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'horizontal',
          left: 'center',
          bottom: 0,
          data: legendData,
          width: '60%',
        },
        series: [
          {
            type: 'pie',
            label: {
              show: false,
            },
            radius: '70%',
            center: ['50%', '40%'],
            data: seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      // Log the size of the chartRef element
      const { width, height } = chartRef.current.getBoundingClientRect();
      console.log(`Chart width: ${width}px, height: ${height}px`);
    }
  }, [legendData, seriesData]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default PieChart;
