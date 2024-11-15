import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Homepage from '../src/pages/Homepage';
import About from '../src/pages/About';
import Test from '../src/pages/Test';
import LoadingScreen from "../src/pages/Loading";
import ResponsiveMenu from "../src/components/ResponsiveMenu"
import './App.css';
import React, {useEffect, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./components/Header";


const App: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [init, setInit] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#dc004e',
            },
            background: {
                default: 'rgba(255,255,255,0)',
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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsFirstLoad(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [init]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <CssBaseline/>
                    {isFirstLoad && <LoadingScreen/>} {}
                    {/*<Particles/>*/}
                    <ResponsiveMenu isOpen={isMenuOpen} onClose={closeMenu}/>
                    <Header onMenuClick={toggleMenu}/>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/test' element={<Test/>}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;