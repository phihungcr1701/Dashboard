import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, LineController } from 'chart.js';

ChartJS.register(LineController, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const AreaChart = ({ data }) => {
    const chartRef = useRef(null); 
    const chartInstance = useRef(null); 
    

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        
        if (chartInstance.current) {
        chartInstance.current.destroy();
        }

        chartInstance.current = new ChartJS(ctx, {
            type: 'line',
            data: {
                labels: data.x,
                datasets: [{
                    label: "User",
                    lineTension: 0.3,
                    backgroundColor: "rgba(2,117,216,0.2)",
                    borderColor: "rgba(2,117,216,1)",
                    pointRadius: 5,
                    pointBackgroundColor: "rgba(2,117,216,1)",
                    pointBorderColor: "rgba(255,255,255,0.8)",
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(2,117,216,1)",
                    pointHitRadius: 50,
                    pointBorderWidth: 2,
                    data: data.y,
                }],
            },
            options: {
                responsive: true, 
                maintainAspectRatio: false, 
                scales: {
                    x: {
                        type: 'category',
                        grid: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 12
                        }
                    },
                    y: {
                        min: 0,
                        max: data.max,
                        ticks: {
                            maxTicksLimit: 7
                        },
                        grid: {
                            color: "rgba(0, 0, 0, .125)",
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }, [data.x, data.y, data.max]); 

    return (<canvas ref={chartRef} height="400%" /> );
};

export default AreaChart;
