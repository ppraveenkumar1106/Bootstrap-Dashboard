import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function WebTrafficChart() {
    useEffect(() => {
        const chartDom = document.querySelector('#trafficChart');
        const myChart = echarts.init(chartDom);

        myChart.setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold',
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        { value: 1048, name: 'Tobaco' },
                        { value: 735, name: 'Cigrets' },
                        { value: 580, name: 'Candy' },
                        { value: 484, name: 'Choco Bars' },
                        { value: 300, name: 'Others' },
                    ],
                },
            ],
        });

        // Cleanup function to dispose of the chart instance when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, []);

    return (
        <div>
            <div id="trafficChart" 
            style={{ minHeight: '500px'}}
            className='eChart'
            ></div>
        </div>
    );
}

export default WebTrafficChart;
