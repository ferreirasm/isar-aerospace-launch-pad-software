import { createStyles, Drawer, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { themeConfiguration } from '../themeConfiguration';
import { DrawerHeader } from '../Feature/Sidebar/components/DrawerHeader';

const useStyles = makeStyles((themeConfiguration) => createStyles({
    container: {
        height: '100vh',
        overflow: 'hidden',
        width: themeConfiguration.spacing(31),
    },

    drawerHeader: {
        backgroundColor: '#2a2a35',
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