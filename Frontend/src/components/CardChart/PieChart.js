import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, Tooltip, Legend, Title, DoughnutController, PieController } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend, Title, DoughnutController, PieController);

const colors = [
    '#FF5733',  // Red
    '#33FF57',  // Green
    '#3357FF',  // Blue
    '#FF33A8',  // Pink
    '#F28D35',  // Orange
    '#D83367',  // Magenta
    '#4CAF50',  // Green
    '#FFC107',  // Yellow
    '#8E44AD',  // Purple
    '#3498DB',  // Light Blue
    '#1ABC9C',  // Teal
    '#9B59B6',  // Lavender
    '#F39C12',  // Amber
    '#16A085'   // Sea Green
  ];

const PieChart = ({ data }) => {
    const chartRef = useRef(null); 
    const chartInstance = useRef(null); 

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        
        if (chartInstance.current) {
        chartInstance.current.destroy();
        }

        chartInstance.current = new ChartJS(ctx, {
            type: 'pie',
            data: {
                labels: data.x,
                datasets: [{
                    data: data.y,
                    backgroundColor: colors,
                }],
            },
            options: {
                responsive: true, 
                maintainAspectRatio: false, 
                cutout: '30%'
            }
        });
    }, [data.x, data.y]); 

    return (<canvas ref={chartRef} height="400%"/>);
};

export default PieChart;
