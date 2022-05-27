import { createStyles, Grid, Icon, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Plot from 'react-plotly.js';

import { themeConfiguration } from '../../themeConfiguration';

interface IGaugeChartsProps {
    name?: string,
    value: number,
    unitSI?: string,
    icon?: JSX.Element,
}

const useStyles = makeStyles((themeConfiguration) => createStyles({
    root:{
        backgroundColor: themeConfiguration.palette.background.paper,
        marginBottom: themeConfiguration.spacing(0.25),
        border: '1px solid #3d3947',
        color: themeConfiguration.palette.common.white,
        maxWidth: '100vh',
    },
    
    title:{
        fontSize: '30px',
        textAlign: 'center',
        color: themeConfiguration.palette.common.white,
    },

    message:{
        fontSize: '40px',
        textAlign: 'center',
        paddingBottom: '8px',
    },

    typography:{
        margin: '24px',
        color: themeConfiguration.palette.common.white,
    },

    paperContainer: {
        borderRadius: '16px',
        background: themeConfiguration.palette.background.paper,
    },
}));

export function GaugeCharts({ name, value, unitSI, icon } : IGaugeChartsProps) {
    const classes = useStyles();

    return(
        <>
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
                        {value?.toFixed(0)} {unitSI}
                    </Typography>
                </Grid>
            </Paper>
        </>
    );
}