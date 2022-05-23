import { createStyles, Grid, Icon, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Plot from 'react-plotly.js';
import { themeConfiguration } from '../themeConfiguration';
import { Thermometer } from './icons/Thermometer';

interface IGaugeChartsProps {
    name?: string,
    value: number,
    unitSI?: string,
    icon?: JSX.Element,
}

// export function GaugeCharts({name, value, unitSI}: IGaugeChartsProps){

//     const data = {
//         domain: { x: [0, 1];
//              y: [0, 1]; };
// 		value: {value};
// 		title: { text: {name} },
// 		type: "indicator",
// 		mode: "gauge+number"
//     }

//     const layout = {
//         width: 600, height: 500, margin: { t: 0, b: 0 }
//     } 
//     Plotly.newPlot('myDiv', data, layout);
//     return (
//         <>
//         </>
//     );
// }
const useStyles = makeStyles((themeConfiguration) => createStyles({
    root:{
        backgroundColor: '#3d3947',
        marginBottom: themeConfiguration.spacing(0.25),
        border: '1px solid #3d3947',
        color: 'white',
        // maxHeight: themeConfiguration.spacing(10),
        maxWidth: '100vh',
    },
    
    title:{
        fontSize: '30px',
        textAlign: 'center',
        color: 'white',
    },

    message:{
        fontSize: '40px',
        textAlign: 'center',
        paddingBottom: '8px',
    },

    typography:{
        margin: '24px',
        color: 'white',
    },

    paperContainer: {
        borderRadius: '16px',
        background: '#3d3947',
        // padding: '40px 24px',
    },
}));

export function GaugeCharts({ name, value, unitSI, icon } : IGaugeChartsProps) {
    const classes = useStyles();

    return(
        <>
            {/* <div className={classes.root}>
                <div className={classes.title}>
                    {name} {icon}:  
                </div>
                <div className={classes.message}>
                    <Typography variant='h2' className={classes.typography}>
                        {value?.toFixed(2)} {unitSI}
                    </Typography>
                </div>
            </div> */}
            <Paper 
                elevation={3}
                className={classes.paperContainer}
            >
                <Grid
                    item
                    className={classes.title}
                >
                    {name} {icon}:
                </Grid>
                <Grid
                    item
                    className={classes.message}
                >
                    <Typography variant='h2' className={classes.typography}>
                        {value?.toFixed(2)} {unitSI}
                    </Typography>
                </Grid>
            </Paper>
        </>
    );
}