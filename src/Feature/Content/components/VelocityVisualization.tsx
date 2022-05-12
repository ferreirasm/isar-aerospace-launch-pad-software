import { Grid, Typography } from '@material-ui/core';
import React from 'react';
// import { LaunchDataModel, launchDataModelInitial } from '../../../Models/LaunchDataModel';
import { VelocityModel, velocityModelInitial } from '../../../Models/VelocityModel';
import LaunchDataService from '../../../Service/LaunchDataService';

export function VelocityVisualization() {

    const [velocity, setVelocity] = React.useState<VelocityModel>(velocityModelInitial);
    const [error, setError] = React.useState<string>('');
    // const [launchData, setLaunchData] = React.useState<LaunchDataModel>(launchDataModelInitial);

    React.useEffect(() => {
        fetchVelocity();
    }, []);

    const fetchVelocity = () => {
        LaunchDataService.getLaunchDataService()
            .then((res) => {
                if (res.data) {
                    setVelocity(res.data.velocity);
                    // setLaunchData(res.data);
                }
                console.log(velocity);
                // console.log(launchData);
            })
            .catch((error) => setError(error));
    };

    return (
        <>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant='h5' color='textPrimary'>
                    SPECTRUM STATUS MONITOR
                </Typography>
            </Grid>
        </>
    );
}