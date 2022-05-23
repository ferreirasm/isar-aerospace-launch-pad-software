import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { themeConfiguration } from '../../../themeConfiguration';
import Spectrum from '../../../assets/Spectrum_liftoff.jpg';

// const useStyles = makeStyles((themeConfiguration) => createStyles({
//     img: {
//         textAlgin: 'center',
//         margin: themeConfiguration.spacing(3),
//     }
// }));
const useStyles = makeStyles((themeConfiguration) => createStyles({
    img: {
        textAlign:'center',
        // margin: '24px'
    },
    
}));

export function DrawerBody() {
    const classes = useStyles();

    return(
        <Grid 
            item 
            xs={12} 
            className={classes.img}
        >
            <img
                src={Spectrum}
                alt='rocket'
            />
        </Grid>
    );
}