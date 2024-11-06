import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
    const chartRef = useRef(null); 
    const chartInstance = useRef(null); 

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        
        if (chartInstance.current) {
        chartInstance.current.destroy();
        }

        chartInstance.current = new ChartJS(ctx, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [{
                label: "Revenue",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: [4215, 5312, 6251, 7841, 9821, 14984],
                }],
            },
            options: {
                scales: {
                xAxes: [{
                    time: {
                        unit: 'month'
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 6
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 15000,
                        maxTicksLimit: 5
                    },
                    gridLines: {
                        display: true
                    }
                }],
                },
                legend: {
                    display: false
                }
            }
        });
    }, []); 

    return (<canvas ref={chartRef} height="100%"/>  );
};

export default BarChart;
