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
        fetchData();
        dataContext.setUpdateData(false);

    }, [dataContext.updateData]);

    const fetchData = () => {
        LaunchDataService.getLaunchDataService()
            .then((res) => {
                setVelocity(res.data.velocity);
                setLaunchData(res.data);
            })
            .catch((error) => setError(error));
    };

    const goingUp = String(launchData.goingUp);

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
                        value={launchData.temperature} 
                        unitSI='°C' 
                        icon = {<Thermometer />}
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <GaugeCharts name='Altitude' value={launchData.altitude} unitSI='m'/>
                </Grid>
                <Grid item xs={4} >
                    <MessageView name='Going up?' message={goingUp}/>
                </Grid>
                <Grid item xs={4} >
                    <Speedometer name='Velocity X' valueNumber={velocity.x} unitSI='m/s' />
                </Grid>
                <Grid item xs={4}>
                    <Speedometer name='Velocity Y' valueNumber={velocity.y} unitSI='m/s' />
                </Grid>
                <Grid item xs={4}>
                    <Speedometer name='Velocity Z' valueNumber={velocity.z} unitSI='m/s' />
                </Grid>
                <Grid item xs={12} >
                    <MessageView name='Message' message={launchData.statusMessage}/>
                </Grid>
            </Grid>
        </>
    );
}