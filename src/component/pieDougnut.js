import React from 'react';
import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2';
import Data from './data.json';

const pieDoughnot = () => {
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

    const state = {
        labels: ['Connected', 'Disconnected'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                ],
                data: [connected.length, disconnected.length]
            }
        ]
    }

    return (
        <div>
            <Pie
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'MQTT Connected/Disconnected Situation',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />

            <Doughnut
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'MQTT Connected/Disconnected Situation',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}

export default pieDoughnot;