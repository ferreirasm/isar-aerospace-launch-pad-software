/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import { Header } from './Feature/Home/components/Header';
import { BackgroundVideo } from './Feature/Home/components/BackgroundVideo';
import { VelocityVisualization } from './Feature/Content/components/VelocityVisualization';
import { Grid } from '@material-ui/core';

// const useStyles = makeStyles(() => ({
//     backgroundVideo: {
//         height: '100%',
//         width: '100%',
//         top: 0,
//         padding: 'none',
//         position: 'absolute',
//     }
// }));

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
            <Grid container>
                <Header />
                <VelocityVisualization /> 
            </Grid>
            {/* <BackgroundVideo /> */}
        </>
    );
}

export default App;
