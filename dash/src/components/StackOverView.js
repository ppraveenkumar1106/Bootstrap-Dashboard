import './StackOver.css';
import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';


const StackOverview = () => {
  const [unitType, setUnitType] = useState('Dollars'); // State to manage the selected option

  useEffect(() => {
    const chartDom = document.getElementById('stack-overview');
    const myChart = echarts.init(chartDom);

    const dataMap = {
      Dollars: {
        reportPeriod:  [30, 51, 20, 20, 40],
        comparePeriod: [30, 50, 10, 22, 40],
      },
      Units: {
        reportPeriod: [400, 300, 200, 100, 500],
        comparePeriod: [300, 200, 100, 400, 300],
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
            color: '#cc6600',
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
            color: '#b3b300',
          },
        },
      ],
    };

    myChart.setOption(option);

    // Clean up chart instance on component unmount
    return () => {
      myChart.dispose();
    };
  }, [unitType]);

  return (
    <div className="chart-container">
      <div className="chart-header">
        <p >Store Overview</p>
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
      
      <div id="stack-overview" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default StackOverview;