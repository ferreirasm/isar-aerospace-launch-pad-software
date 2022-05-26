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
import { BasicAlertDialog } from '../../../shared/components/BasicAlertDialog';

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
    const [goingUpList, setGoingUpList] = React.useState<string[]>(['']);
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    
    const currentHistory = [false];
    
    React.useEffect(() => {

        openConnection();

        dataContext.setUpdateData(false);

    }, [dataContext.updateData]);

    // React.useEffect(() => {
    //     openConnection();

    // }, []);

    const openConnection = () => {
        const url = 'wss://isaraerospace-webdeveloper-assignment.azurewebsites.net/api/SpectrumWS?token=0DB9D71DE67';
        const ws = new WebSocket(url);
        
        ws.onopen = () => {console.log('OPENED: '+url);};
        ws.onmessage = (event) => {updateData(event);};
        ws.onerror = () => {console.log('Error');}; 
        ws.close = () => {const ws = null;};
        ws.onclose = () => { setTimeout( () => { dataContext.setUpdateData(true); }, 1000); };
        // ws.onclose = () => { openConnection(); };
    };

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
       
        // goingUp = String(launchData.GoingUp);
        
        handleHistoryGoingUp(JSON.parse(event.data).GoingUp); 
    };


    const handleHistoryGoingUp = (goingUp: any) => {

        // console.log(currentHistory);
        currentHistory.push(goingUp);

        if (currentHistory.length > 3) 
        {
            currentHistory.shift();
        }

        if (currentHistory.length > 2 && currentHistory.at(1) != currentHistory.at(2))
        {
            setOpenDialog(true);
        }
    };

    const handleChangeTrajectory = (goingUp: boolean) => {
        
        const newGoingup = !goingUp;
        // if (goingUp == true)
        //     LaunchDataService.postLaunchDataService((false));

        // else 
        LaunchDataService.postLaunchDataService(newGoingup);
        
        setOpenDialog(false);
        console.log('Valor é: '+ goingUp);
        console.log('Novo valor é: '+ newGoingup);
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
                    description={`The state of going up now is ${String(launchData.GoingUp)}! Do you want change?`}
                    handlePrimaryButton={() => {handleChangeTrajectory(launchData.GoingUp);}}
                    handleSecondaryButton={() => {setOpenDialog(false);}}
                    textPrimaryButton={'Yes'}
                    textSecondaryButton={'No'}
                />
            </Grid>
        </>
    );
}