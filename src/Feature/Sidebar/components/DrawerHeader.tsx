import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createStyles, Grid } from '@material-ui/core';

import Isar from '../../../assets/logoIsar.svg';
import Spectrum from '../../../assets/Spectrum_liftoff.jpg';

const useStyles = makeStyles(() => createStyles({
    img: {
        textAlign:'center',
    },

    photo:{
        maxWidth: '230px',
        borderRadius: '16px',

    },

}));

export function DrawerHeader() {
    const classes = useStyles();
    
    return(
        <Grid 
            item 
            xs={12} 
            className={classes.img}
        >
            <img 
                height='44px'
                src={Isar}
                alt='logo'
            />
            <img
                src={Spectrum}
                alt='rocket'
                className={classes.photo}
            />
        </Grid>
    );
}

