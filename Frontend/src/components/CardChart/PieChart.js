import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, Tooltip, Legend, Title, DoughnutController, PieController } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend, Title, DoughnutController, PieController);

const PieChart = () => {
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
                labels: ["Blue", "Red", "Yellow", "Green"],
                datasets: [{
                    data: [12.21, 15.58, 11.25, 8.32],
                    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                }],
            },
            options: {
                cutout: '30%'
            }
        });
    }, []); 

    return (<canvas ref={chartRef} />);
};

export default PieChart;
