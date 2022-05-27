import React from 'react';
import { Grid } from '@material-ui/core';

import { DataContext } from '../DataContext';
import { LaunchDataModel, launchDataModelInitial } from '../../../Models/LaunchDataModel';
import { VelocityModel, velocityModelInitial } from '../../../Models/VelocityModel';
import LaunchDataService from '../../../Service/LaunchDataService';
import { GaugeCharts } from '../../../shared/components/GaugeCharts';
import { Thermometer } from '../../../shared/icons/Thermometer';
import { MessageView } from '../../../shared/components/MessageView';
import { Speedometer } from '../../../shared/components/Speedometer';

export function DataVisualization() {

    const dataContext = React.useContext(DataContext);

    const [velocity, setVelocity] = React.useState<VelocityModel>(velocityModelInitial);
    const [launchData, setLaunchData] = React.useState<LaunchDataModel>(launchDataModelInitial);

    React.useEffect(() => {
        fetchData();
        dataContext.setUpdateData(false);

    }, [dataContext.updateData]);

    const fetchData = () => {
        LaunchDataService.getLaunchDataService()
            .then((res) => {
                setLaunchData(res.data);
                setVelocity(res.data.velocity);
            })
            .catch((error) => console.log(error));
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
                        value={launchData.temperature} 
                        unitSI='°C' 
                        icon = {<Thermometer />}
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <GaugeCharts name='Altitude' value={launchData.altitude} unitSI='m'/>
                </Grid>
                <Grid item xs={4} >
                    <MessageView name='Going up?' message={String(launchData.goingUp)}/>
                </Grid>
                <Grid item xs={4} >
                    <Speedometer name='Velocity X' valueNumber={velocity.x} unitSI='[m/s]' />
                </Grid>
                <Grid item xs={4}>
                    <Speedometer name='Velocity Y' valueNumber={velocity.y} unitSI='[m/s]' />
                </Grid>
                <Grid item xs={4}>
                    <Speedometer name='Velocity Z' valueNumber={velocity.z} unitSI='[m/s]' />
                </Grid>
                <Grid item xs={12} >
                    <MessageView name='Message' message={launchData.statusMessage}/>
                </Grid>
            </Grid>
        </>
    );
}