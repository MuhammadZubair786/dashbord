import React from 'react';
import ReactApexChart from 'react-apexcharts';

// Function to generate dates from 1/7/2024 to 18/7/2024
const generateDates = () => {
    const dates = [];
    const startDate = new Date(2024, 6, 1); // 1/7/2024
    const endDate = new Date(2024, 6, 18); // 18/7/2024

    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toLocaleDateString('en-GB'); // Format as 'dd/mm/yyyy'
        dates.push(dateStr);
    }

    return dates;
};

function AppUserStatics() {

    const chartData = {
        series: [{
            data: [
                400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 
                1500, 1600, 0, 1800, 1900, 2000, 2100, 2200 // Example data for 18 days
            ]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 10, // Rounded corners
                    borderRadiusApplication: 'end', // Apply the radius only to the end of the bars
                    horizontal: false,
                    barHeight: '50%', // Adjust the bar height
                    columnWidth: '70%', // Adjust the width to add spacing
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: generateDates(),
            }
        },
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height={350}
                />
            </div>
        </div>
    );
}

export default AppUserStatics;
