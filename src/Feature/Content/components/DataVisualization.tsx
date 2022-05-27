import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { LaunchDataModel, launchDataModelInitial } from '../../../Models/LaunchDataModel';
import { VelocityModel, velocityModelInitial } from '../../../Models/VelocityModel';
import LaunchDataService from '../../../Service/LaunchDataService';
import { GaugeCharts } from '../../../shared/components/GaugeCharts';
import { Thermometer } from '../../../shared/icons/Thermometer';
import { MessageView } from '../../../shared/components/MessageView';
import { Speedometer } from '../../../shared/components/Speedometer';
import { BasicAlertDialog } from '../../../shared/components/BasicAlertDialog';

export function DataVisualization() {

    const [velocity, setVelocity] = React.useState<VelocityModel>(velocityModelInitial);
    const [launchData, setLaunchData] = React.useState<LaunchDataModel>(launchDataModelInitial);
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    
    const currentHistory = [false];

    setTimeout( () => { openConnection(); }, 1000);

    const openConnection = () => {
        const url = 'wss://isaraerospace-webdeveloper-assignment.azurewebsites.net/api/SpectrumWS?token=0DB9D71DE67';
        const ws = new WebSocket(url);
        
        ws.onopen = () => {console.log('OPENED: '+url);};
        ws.onmessage = (event) => {updateData(event);};
        ws.onerror = (error) => {console.log(error);}; 
        ws.close = () => {const ws = null;};
        ws.onclose = () => { reconnectConnection(); console.log('RECONNECTING...');};
    };

    const reconnectConnection = () => {
        setTimeout( () => { openConnection(); }, 1000);
    };
    
    const updateData = (event: any) => {
        setLaunchData(JSON.parse(event.data));
        setVelocity(JSON.parse(event.data).Velocity);
        
        handleHistoryGoingUp(JSON.parse(event.data).GoingUp); 
    };


    const handleHistoryGoingUp = (goingUp: any) => {

        currentHistory.push(goingUp);

        if (currentHistory.length > 3) 
        {
            currentHistory.shift();
        }

        if (currentHistory.length > 2 && currentHistory.at(1) != currentHistory.at(2) && currentHistory.at(2) == false)
        {
            setOpenDialog(true);
        }
    };

    const handleChangeTrajectory = (goingUp: boolean) => {
        
        const newGoingup = !goingUp;

        LaunchDataService.postLaunchDataService(newGoingup);
        
        setOpenDialog(false);
    };

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
                    <MessageView name='Going up?' message={String(launchData.GoingUp)}/>
                </Grid>
                <Grid item xs={4} >
                    <Speedometer name='Velocity X' valueNumber={velocity.X} unitSI='[m/s]' />
                </Grid>
                <Grid item xs={4}>
                    <Speedometer name='Velocity Y' valueNumber={velocity.Y} unitSI='[m/s]' />
                </Grid>
                <Grid item xs={4}>
                    <Speedometer name='Velocity Z' valueNumber={velocity.Z} unitSI='[m/s]' />
                </Grid>
                <Grid item xs={12} >
                    <MessageView name='Message' message={launchData.StatusMessage}/>
                </Grid>
                <BasicAlertDialog 
                    open={openDialog} 
                    title={'Spectrum change your trajectory'} 
                    description={'The trajectory suddenly has changed to descending. Do you want correcting to ascending?'}
                    handlePrimaryButton={() => {handleChangeTrajectory(launchData.GoingUp);}}
                    handleSecondaryButton={() => {setOpenDialog(false);}}
                    textPrimaryButton={'Yes, I want!'}
                    textSecondaryButton={'No, that is ok!'}
                />
            </Grid>
        </>
    );
}