import { createStyles, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { themeConfiguration } from '../../themeConfiguration';

interface IMessageViewProps {
    name?: string,
    message?: string
}

const useStyles = makeStyles((themeConfiguration) => createStyles({
    root:{
        backgroundColor: '#3d3947',
        marginBottom: themeConfiguration.spacing(0.25),
        border: '1px solid #3d3947',
        color: 'white',
    },

    paperContainer: {
        borderRadius: '16px',
        background: '#3d3947',
    },
    
    title:{
        fontSize: '30px',
        textAlign: 'center',
        color:'white'
    },
    message:{
        fontSize: '40px',
        textAlign: 'center',
        paddingBottom: '8px',
    },
    typography:{
        margin: '24px',
        color: 'white',
    }
}));

export function MessageView({name, message}: IMessageViewProps) {
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
                    {name}:
                </Grid>
                <Grid
                    item
                    className={classes.message}
                >
                    <Typography variant='h2' className={classes.typography}>
                        {message?.toUpperCase()}!
                    </Typography>
                </Grid>
            </Paper>
        </>
    );
}