import { Button, createStyles, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Isar from '../../../assets/logoIsar.svg';
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

    photo:{
        maxWidth: '230px',
        borderRadius: '16px',

    },

    paperContainer:{
        borderRadius: '16px',
        maxWidth: '230px',
        backgroundColor: '#115fb0',
    },

    item:{

    },

    text:{
        color: 'white',
    },

    button: {
        backgroundColor: '#115fb0',
        color: 'white',
    }

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
            {/* <Paper className={classes.paperContainer}>
                <Grid item>
                    <Typography className={classes.text}>
                        Update Data
                    </Typography>
                </Grid>
            </Paper> */}
            <Button variant='contained' color='primary' className={classes.button}>
                Update Data
            </Button>
        </Grid>
    );
}

