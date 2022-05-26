/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import { Header } from './Feature/Home/components/Header';
import { DataVisualization } from './Feature/Content/components/DataVisualization';
import { Grid, ThemeProvider } from '@material-ui/core';
import { Sidebar } from './components/Sidebar';
import { makeStyles } from '@material-ui/styles';
import { themeConfiguration } from './themeConfiguration';
import { DataContext } from './Feature/Content/DataContext';
import { BasicAlertDialog } from './shared/components/BasicAlertDialog';

const useStyles = makeStyles(() => ({
    home: {
        marginLeft: themeConfiguration.spacing(31),
        height: '100vh',
        overflow: 'hidden',
    },
    container: {
        backgroundColor:'#2a2a35',
    },
}));

function App() {

    const classes = useStyles();
    const [updateData, setUpdateData] = React.useState<boolean>(false);
    
    return (
        <ThemeProvider theme={themeConfiguration}>
            <DataContext.Provider value={{ updateData, setUpdateData}}>
                <div className={classes.container}>
                    <Sidebar />
                    <div className={classes.home}>
                        <Header />
                        <DataVisualization />
                    </div>
                </div>
            </DataContext.Provider>
        </ThemeProvider>
    );
}

export default App;
