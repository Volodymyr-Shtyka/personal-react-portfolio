import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import {ThemeProvider, createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render( // Use createRoot from react-dom/client
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
);