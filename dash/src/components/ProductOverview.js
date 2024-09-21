import './ProductOverview.css'; // Ensure this CSS file exists
import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

const ProductOverview = () => {
  const [unitType, setUnitType] = useState('Dollars'); 

  useEffect(() => {
    const chartDom = document.getElementById('product-overview');
    const myChart = echarts.init(chartDom);

    

    const dataMap = {
      Dollars: {
        reportPeriod: [50, 40, 30, 20, 10],
        comparePeriod: [10, 50, 40, 30, 20],
      },
      Units: {
        reportPeriod: [500, 400, 300, 200, 100],
        comparePeriod: [600, 500, 400, 300, 200],
      },
    };

    const option = {
      
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['Report Period', 'Compare Period'],
        top: '10px', 
        right:'10px',
        itemWidth: 14,
        itemHeight: 14,
        icon: 'circle',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Total', '52 Weeks', '13 Weeks', 'QTD', 'YTD'],
      },
      yAxis: {
        type: 'value',
        name: unitType,

        axisLabel: {
          formatter: '${value}M',
        },
      },
      series: [
        {
          name: 'Report Period',
          type: 'bar',
          barWidth: '20%', 
          barGap: '80%',
          barCategoryGap: '10%',
          data: dataMap[unitType].reportPeriod,
          itemStyle: {
            color: '#0099ff',
          },
        },
        {
          name: 'Compare Period',
          type: 'bar',
          barWidth: '20%', 
          barGap: '80%',
          barCategoryGap: '10%',
          data: dataMap[unitType].comparePeriod,
          itemStyle: {
        color: '#66c2ff',
          },
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, [unitType]);

  return (
    <div className="chart-container">
      <div className="chart-header">
        <p>Product Overview</p>
        <div className="unit-switcher">
          <label>
            <input
              type="radio"
              value="Dollars"
              checked={unitType === 'Dollars'}
              onChange={() => setUnitType('Dollars')}
            />
            Dollars
          </label>
          <label>
            <input
              type="radio"
              value="Units"
              checked={unitType === 'Units'}
              onChange={() => setUnitType('Units')}
            />
            Units
          </label>
        </div>
        
      </div>
      
      <div className="separator"></div>
      <div id="product-overview" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default ProductOverview;