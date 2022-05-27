import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import { themeConfiguration } from '../../../themeConfiguration';

const useStyles = makeStyles(() => ({
    logoContainer: {
        backgroundColor: themeConfiguration.palette.background.default,
        marginBottom: themeConfiguration.spacing(0.25),
        border: '1px solid #2a2a35',
        color: themeConfiguration.palette.common.white,
        maxHeight: themeConfiguration.spacing(10),
        alignItems: 'flex',
        height: '62px',

    },

    textContainer: {
        textAlign: 'center',
    },

    imageContainer: {
        textAlign: 'center',
        alignItems: 'center',
    }
}));

export function Header() {

    const classes = useStyles();

    return (
        <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='flex-start'
            spacing={2}>
            <Grid 
                item 
                xs={12}
                md={12}
                className={classes.logoContainer}>
                <Typography 
                    variant='h4' 
                    className={classes.textContainer}>
                    Spectrum Launch Health Monitor
                </Typography>
            </Grid>
        </Grid>
    );
}