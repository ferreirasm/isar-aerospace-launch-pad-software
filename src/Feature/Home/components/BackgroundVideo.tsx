import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    backgroundVideo: {
        height: '100%',
        width: '100%',
        top: 0,
        padding: 'none',
        position: 'absolute',
    }
}));

export function BackgroundVideo() {

    const classes = useStyles();

    return(
        <Grid item xs={12} sm={12} md={12}>
            <video loop autoPlay={true} className={classes.backgroundVideo}>
                <source
                    src='https://vod-progressive.akamaized.net/exp=1652293784~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3662%2F23%2F593313234%2F2795519063.mp4~hmac=a0d3ab6e878bf1a66cedca1ff2567a67b498dc763f3b522fa0d5292ace3cbd51/vimeo-prod-skyfire-std-us/01/3662/23/593313234/2795519063.mp4?filename=super-cut.mp4'
                    type='video/mp4'
                />
            </video>
        </Grid>
    );
}