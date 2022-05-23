import React, { Component } from 'react';
import Plot from 'react-plotly.js';

interface IChartProps {
    name?: string,
    value: number,
    unitSI?: string
}

class Chart extends Component {
    render() {
        return (
            <div>
                <Plot
                    data={[
                        {
                            domain: { x: [0,1], y: [0,1]},
                            value: 2270,
                            title: { text: 'Velocity in x axis [m/s]' },
                            type: 'indicator',
                            mode: 'delta',
                            delta: { reference: 0 },
                            gauge: {
                                axis: { range: [null, 1000]},
                                bar: { color: '#115fb0'},
                                bgcolor: '#3d3947',
                                bordercolor: 'white',
                            }
                        }
                    ]}
                    layout={{ 
                        width: 634, 
                        height: 270,
                        paper_bgcolor: '#3d3947',
                        font: { color: 'white'}
                    }}
                />
            </div>
        );
    }
}

export default Chart;