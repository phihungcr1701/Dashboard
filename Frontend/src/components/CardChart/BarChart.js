import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
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
                labels: data.x,
                datasets: [{
                label: "User",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
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
                            display: true
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

    return (<canvas ref={chartRef} height="400%"/>  );
};

export default BarChart;
