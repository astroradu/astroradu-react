import React, {useState, useEffect, useCallback} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ParticlesComponent from './components/Particles';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import ResponsiveMenu from './components/homepage/ReponsiveMenu';
import LoadingScreen from './components/LoadingScreen';
import About from './pages/About';
import Test from './pages/Test';
import './App.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2', // Primary color for the dashboard
            },
            secondary: {
                main: '#dc004e', // Secondary color for the dashboard
            },
            background: {
                default: '#f5f5f5', // Default background color
            },
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
            h6: {
                fontWeight: 500,
            },
            body1: {
                fontWeight: 400,
            },
        }
    });

    // useEffect(() => {
    //     if (isMenuOpen) {
    //         document.body.classList.add('no-scroll');
    //     } else {
    //         document.body.classList.remove('no-scroll');
    //     }
    // }, [isMenuOpen]);

    useEffect(() => {
        const timer = setTimeout(() => setIsFirstLoad(false), 1000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    {isFirstLoad && <LoadingScreen/>} {}
                    <ParticlesComponent id="particles" />


                    <ResponsiveMenu isOpen={isMenuOpen} onClose={closeMenu}/>
                    <Header onMenuClick={toggleMenu}/>
                    <Routes >
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/test' element={<Test/>}/>
                    </Routes >
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
