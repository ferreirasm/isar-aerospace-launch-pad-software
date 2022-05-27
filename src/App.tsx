/* eslint-disable linebreak-style */
import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { themeConfiguration } from './themeConfiguration';
import { Home } from './Feature/Home/view/Home';

function App() {
    
    return (
        <ThemeProvider theme={themeConfiguration}>
            <Home />
        </ThemeProvider>
    );
}

export default App;
