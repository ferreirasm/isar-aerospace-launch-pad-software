/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import { Header } from './Feature/Home/components/Header';
import { Grid } from '@material-ui/core';

function App() {
    return (
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //   Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //   Learn React
        //         </a>
        //     </header>
        // </div>
        <>
            <Header />
            <Grid item xs={12} sm={12} md={12}>
                <video loop autoPlay={true}>
                    <source
                        src='https://vod-progressive.akamaized.net/exp=1652293784~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3662%2F23%2F593313234%2F2795519063.mp4~hmac=a0d3ab6e878bf1a66cedca1ff2567a67b498dc763f3b522fa0d5292ace3cbd51/vimeo-prod-skyfire-std-us/01/3662/23/593313234/2795519063.mp4?filename=super-cut.mp4'
                        type='video/mp4'
                    />
                </video>
            </Grid>
        </>
    );
}

export default App;
