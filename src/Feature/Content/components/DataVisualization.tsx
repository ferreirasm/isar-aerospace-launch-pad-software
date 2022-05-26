import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { LaunchDataModel, launchDataModelInitial } from '../../../Models/LaunchDataModel';
import { VelocityModel, velocityModelInitial } from '../../../Models/VelocityModel';
import LaunchDataService from '../../../Service/LaunchDataService';
import { GaugeCharts } from '../../../shared/components/GaugeCharts';
import { Thermometer } from '../../../shared/icons/Thermometer';
import { MessageView } from '../../../shared/components/MessageView';
import { Speedometer } from '../../../shared/components/Speedometer';
import { DataContext } from '../DataContext';
import io from 'socket.io-client';

const useStyles = makeStyles(() => ({
    // container:{
    //     backgroundColor:'#2a2a35',
    //     // backgroundColor:'#fbd1c1',
    // }
}));

export function DataVisualization() {

    const classes = useStyles();
    const dataContext = React.useContext(DataContext);

    const [velocity, setVelocity] = React.useState<VelocityModel>(velocityModelInitial);
    const [error, setError] = React.useState<string>('');
    const [launchData, setLaunchData] = React.useState<LaunchDataModel>(launchDataModelInitial);
    
    React.useEffect(() => {

        openConnection();

        dataContext.setUpdateData(false);

    }, [dataContext.updateData]);

    const url = 'wss://isaraerospace-webdeveloper-assignment.azurewebsites.net/api/SpectrumWS?token=0DB9D71DE67';
    const ws = new WebSocket(url);
    
    const openConnection = () => {
        ws.onopen = () => {console.log('OPENED: '+url);};
        ws.onmessage = (event) => {updateData(event);};
        ws.onerror = () => {console.log('Error');}; 
        ws.close = () => {const ws = null;};
    };

    // const updateVelocity = () => {
    //     const velocity2 = launchData.Velocity[0].X;
    //     const test = velocity2;
    //     console.log(velocity);
    //     console.log(test);
    // };

    // const fetchData = () => {
    //     LaunchDataService.getLaunchDataService()
    //         .then((res) => {
    //             setVelocity(res.data.velocity);
    //             setLaunchData(res.data);
    //         })
    //         .catch((error) => setError(error));
    // };

    const updateData = (event: any) => {
        setLaunchData(JSON.parse(event.data));
        setVelocity(JSON.parse(event.data).Velocity);
    };

    const goingUp = String(launchData.GoingUp);

    return (
        <>
            <Grid 
                container
                direction='row'
                spacing={1}
            >
                <Grid item xs={4}>
                    <GaugeCharts 
                        name='Temperature' 
                        value={launchData.Temperature} 
                        unitSI='°C' 
                        icon = {<Thermometer />}
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <GaugeCharts name='Altitude' value={launchData.Altitude} unitSI='m'/>
                </Grid>
                <Grid item xs={4} >
                    <MessageView name='Going up?' message={goingUp}/>
                </Grid>
                <Grid item xs={4} >
                    <Speedometer name='Velocity X' valueNumber={velocity.X} unitSI='m/s' />
                </Grid>
                <Grid item xs={4}>
                    <Speedometer name='Velocity Y' valueNumber={velocity.Y} unitSI='m/s' />
                </Grid>
                <Grid item xs={4}>
                    <Speedometer name='Velocity Z' valueNumber={velocity.Z} unitSI='m/s' />
                </Grid>
                <Grid item xs={12} >
                    <MessageView name='Message' message={launchData.StatusMessage}/>
                </Grid>
            </Grid>
        </>
    );
}