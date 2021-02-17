import React from 'react';
import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2';
import Data from './data.json';

const connected = []
const disconnected = []

Data.map(res => {
    if (res.message === 'client is disconnected!') {
        disconnected.push(res.message)
    }
    else {
        connected.push(res.message)
    }
})


const total = connected.length + disconnected.length

const line = {
    labels: ['First', 'Connected', 'Disconnected', 'Last'],
    datasets: [{
        label: 'MQTT Connected/Disconnected Situation',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, connected.length, disconnected.length, total]
    }]
}

class LineBar extends React.Component {

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
    }


    render() {
        return (
            <div>
                <Line
                    data={line}
                    ref="chart"
                />

                <Bar
                    data={line}
                    ref="chart"
                />
            </div>
        )
    }
}

export default LineBar;