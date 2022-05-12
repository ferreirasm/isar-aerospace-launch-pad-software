import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import Isar from '../../../assets/logotest.svg';
import { themeConfiguration } from '../../../themeConfiguration';

const useStyles = makeStyles(() => ({
    logoContainer: {
        // margin: themeConfiguration.spacing(0.25),
        // backgroundColor: '#095EDD',
        backgroundColor: '#000B27',
        paddingTop: '12px !important'

    },
    textContainer: {
        padding: '0px 0px 0px 12px !important'
    }
}));

export function Header() {

    const classes = useStyles();

    return (
        <Grid 
            container
            justifyContent='center'
            direction='column'
            alignItems='center'
            spacing={3}
            className={classes.logoContainer}>
            <Grid item xs={12} sm={12} md={12}>
                <img src={Isar} alt='logo'></img>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12} className={classes.textContainer}>
                <Typography variant='h5' color='textPrimary'>
                    SPECTRUM STATUS MONITOR
                </Typography>
            </Grid> */}
        </Grid>
    );
}