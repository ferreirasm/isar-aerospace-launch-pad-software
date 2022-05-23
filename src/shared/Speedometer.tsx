import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import Plot from 'react-plotly.js';

interface IGaugeProps {
    name?: string,
    valueNumber: number,
    unitSI?: string
}

const useStyles = makeStyles(() => ({
    paperContainer:{
        borderRadius: '16px',
    },
}));

export function Gauge({ name, valueNumber, unitSI}: IGaugeProps){
    const classes = useStyles();

    return(
        <Paper 
            elevation={3}
            className={classes.paperContainer}
        >
            <Grid container>
                <Plot
                    data={[
                        {
                            domain: { x: [-1,1], y: [-1,1]},
                            value: valueNumber,
                            title: { text: name+' - '+unitSI, font:{ size: 30} },
                            type: 'indicator',
                            mode: 'gauge+number',
                            gauge: {
                                axis: { range: [-1500, 1500]},
                                steps:
                                [
                                    { range: [-1500, -750], color: '#11a0b0' },
                                    { range: [-750, 0], color: '#118bb0' },
                                    { range: [0, 750], color: '#1176b0' },
                                    { range: [750, 1500], color: '#115fb0' },
                                ],
                                bar: { color: '#d48b0d'},
                                bgcolor: '#3d3947',
                                bordercolor: '#3d3947',
                                threshold: 
                                {
                                    line: { color: '#B22222', width: 3 },
                                    thickness: 1,
                                    value: 0,
                                },                             
                            }
                        }
                    ]}
                    layout={{ 
                        width: 428, 
                        height: 290,
                        paper_bgcolor: '#3d3947',
                        font: { color: 'white'}
                    }}
                />
            </Grid>
        </Paper>
    );
}