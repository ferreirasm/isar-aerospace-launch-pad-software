import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Header } from '../components/Header';
import { DataVisualization } from '../../Content/components/DataVisualization';
import { DataContext } from '../../Content/DataContext';
import { Sidebar } from '../../Sidebar/view/Sidebar';
import { themeConfiguration } from '../../../themeConfiguration';

const useStyles = makeStyles(() => ({
    home: {
        marginLeft: themeConfiguration.spacing(31),
        height: '100vh',
        overflow: 'hidden',
    },
    container: {
        backgroundColor: themeConfiguration.palette.background.default,
    },
}));

export function Home() {

    const classes = useStyles();
    const [updateData, setUpdateData] = React.useState<boolean>(false);

    return(
        <DataContext.Provider value={{ updateData, setUpdateData}}>
            <div className={classes.container}>
                <Sidebar />
                <div className={classes.home}>
                    <Header />
                    <DataVisualization />
                </div>
            </div>
        </DataContext.Provider>
    );
}