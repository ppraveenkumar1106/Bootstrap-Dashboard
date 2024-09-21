import React, { useEffect } from 'react';
import './MarketSummery.css';
import * as echarts from 'echarts';

const MarketSummery = () => {
  useEffect(() => {
    const chartDom = document.getElementById('multi-series-bar-chart');
    if (!chartDom) {
      console.error('Chart container not found');
      return;
    }

    const myChart = echarts.init(chartDom);

    const dataset = [
      ['product', '%Precentage Rp', '%Purchases CP', '%Market Predicted'],
      ['Cigarettes', 70, 70, 70],
      ['Other Tobacco Products', 40, 20, 20],
      ['Candy', 10, 10, 10],
      ['Food Service', 6, 5, 1],
      ['Packaged Beverages', 0, 0, 0],
    ];

    const option = {
      color: ['#b366ff', '#33d6ff','#ffad33' ],

      legend: {
        orient: 'horizontal',
        left: 'right',
        top: 'top',
        itemWidth: 14, 
        itemHeight: 14, 
        icon: 'circle',
      },
      tooltip: {},
      dataset: {
        source: dataset,
      },
      xAxis: { type: 'category' },
      yAxis: {
        type: 'value',
        max: 100,
        axisLabel: {
          formatter: '{value}%',
        },
      },
      series: [
        { type: 'bar', barWidth: '10%', barGap: '120%', barCategoryGap: '10%' },
        { type: 'bar', barWidth: '10%', barGap: '120%', barCategoryGap: '10%' },
        { type: 'bar', barWidth: '10%', barGap: '120%', barCategoryGap: '10%' },
      ]
      ,
    };

    myChart.setOption(option);


    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, []);

  return (
    
    
    <div className="chart-container">
    <div className="chart-header">

      <p>Market Summery</p>
      
    </div>
      <div id="multi-series-bar-chart" style={{marginLeft: '-90px', width: '105%', height: '400px' }} />
    </div>
    
  );
};

export default MarketSummery;
