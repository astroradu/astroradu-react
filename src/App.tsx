import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Homepage from '../src/pages/Homepage';
import About from '../src/pages/About';
import './App.css';
import React, {useEffect, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
// import 'react-image-lightbox/style.css';

const App: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [init, setInit] = useState(false);

    const montserratFontFamily = `${process.env.PUBLIC_URL}/fonts/montserrat_font.ttf`

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
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `@font-face {
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 400;
                    src: local('Montserrat'), url(${montserratFontFamily}) format('woff2');
                    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }`,
            },
        },
        typography: {
            fontFamily: 'Montserrat, Arial, sans-serif',
            h4: {
                fontWeight: 600
            },
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
                    {/*{isFirstLoad && <LoadingScreen/>} {}*/}
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/portfolio' element={<Portfolio/>}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;