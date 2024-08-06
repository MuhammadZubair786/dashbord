import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function AppLoginChart({ data, labels, colors }) {

    console.log(labels)

    const [chartData, setchartData] = useState({
        series: data,
        labels,
        colors,
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },

    })

    // const chartData = {

    // }


    return (
        <div>
            <div id="chart">
                <ReactApexChart options={chartData} series={chartData?.series} type="donut" />
            </div>
            <div id="html-dist" />
        </div>
    );

}

export default AppLoginChart