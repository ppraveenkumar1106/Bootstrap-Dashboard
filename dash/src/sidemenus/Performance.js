import React from 'react';
import Chart from 'react-apexcharts';
import './Performance.css'

function Performance () { const data = {
    series: [
        {
            name: 'Tobaco',
            data: [31, 40, 28, 51, 42, 82, 56],
        },
        {
            name: 'Candy',
            data: [11, 32, 45, 32, 34, 52, 41],
        },
        {
            name: 'Other Products',
            data: [15, 11, 32, 18, 9, 24, 11],
        },
    ],
    options: {
        chart: {
            height: 450,
            type: 'area',
            toolbar: {
                show: false
            },
        },
        markers: {
            size: 4,
        },
        colors: ['#4154f1', '#2eca6a', '#ff771d'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.4,
                stops: [0, 90, 100],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00:000Z',
                '2018-09-19T01:30:00:000Z',
                '2018-09-19T02:00:00:000Z',
                '2018-09-19T03:30:00:000Z',
                '2018-09-19T04:00:00:000Z',
                '2018-09-19T05:30:00:000Z',
                '2018-09-19T06:00:00:000Z',
            ],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    }
  };
  
  return (
    <div id='Performance' className='Performance'>
    <div className="Performance-titles">
    <h4>Performance | sales </h4>
    </div>
        <Chart
            options={data.options}
            series={data.series}
            type={data.options.chart.type}
            height={data.options.chart.height}
        />
    </div>
  )
}
    
export default Performance