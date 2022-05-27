import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, createStyles, Grid, Paper, Typography } from '@material-ui/core';

import { DataContext } from '../../Content/DataContext';
import Isar from '../../../assets/logoIsar.svg';
import Spectrum from '../../../assets/Spectrum_liftoff.jpg';
import { themeConfiguration } from '../../../themeConfiguration';

const useStyles = makeStyles(() => createStyles({
    img: {
        textAlign:'center',
    },

    photo:{
        maxWidth: '230px',
        borderRadius: '16px',

    },

    button: {
        backgroundColor: themeConfiguration.palette.primary.main,
        color: themeConfiguration.palette.common.white,
    }

}));

export function DrawerHeader() {
    const classes = useStyles();

    const dataContext = React.useContext(DataContext);
    
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
            <Button 
                variant='contained' 
                color='primary' 
                className={classes.button}
                onClick={ () => dataContext.setUpdateData(true)}
            >
                Update Data
            </Button>
        </Grid>
    );
}

