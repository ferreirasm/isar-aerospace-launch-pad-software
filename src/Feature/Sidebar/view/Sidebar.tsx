import React from 'react';
import { createStyles, Drawer, Grid, makeStyles } from '@material-ui/core';

import { DrawerHeader } from '../components/DrawerHeader';
import { themeConfiguration } from '../../../themeConfiguration';

const useStyles = makeStyles((themeConfiguration) => createStyles({
    container: {
        height: '100vh',
        overflow: 'hidden',
        width: themeConfiguration.spacing(31),
    },

    drawerHeader: {
        backgroundColor: themeConfiguration.palette.background.default,
    },

    drawerBody: {
        marginTop:'46px',
    }

}));

export function Sidebar() {
    const classes = useStyles();
    return(
        <>
            <Drawer                
                anchor='left'
                variant='persistent'
                PaperProps={{elevation: 3}}
                open={true}>
                <Grid
                    container
                    direction='column'
                    justify='space-between'
                    alignItems='stretch'
                    className={classes.container}>
                    <Grid 
                        item
                        xs={12}
                        className={classes.drawerHeader} 
                    >
                        <DrawerHeader/>
                    </Grid>
                </Grid>

            </Drawer>
        </>
    );
}