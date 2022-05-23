/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import { Header } from './Feature/Home/components/Header';
import { DataVisualization } from './Feature/Content/components/DataVisualization';
import { Grid, ThemeProvider } from '@material-ui/core';
import { Sidebar } from './components/Sidebar';
import { makeStyles } from '@material-ui/styles';
import { themeConfiguration } from './themeConfiguration';

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

    return (
        <ThemeProvider theme={themeConfiguration}>
            <div className={classes.container}>
                <Sidebar />
                <div className={classes.home}>
                    <Header />
                    <DataVisualization />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
