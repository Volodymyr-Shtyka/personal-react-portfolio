import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Update import
import Home from './components/Home';
import Contact from './components/Contact';
import {ThemeProvider, createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Change primary color
        },
        secondary: {
            main: '#dc004e', // Change secondary color
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;