import React, {useState} from "react";
import {AppBar, Toolbar, Button, IconButton, Menu, MenuItem, useMediaQuery, Box} from "@mui/material";
import {Link} from 'react-router-dom';
import { useIsMobile } from '../utils/ScreenUtils';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setIsMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setIsMenuOpen(false);
    };

    const observatoryLogo = `${process.env.PUBLIC_URL}/logos/observatory_logo.svg`
    const personalLogo = `${process.env.PUBLIC_URL}/logos/personal_logo.svg`

    const NavigationButton: React.FC<{ text: string, navLink: string }> = ({text, navLink}) => {
        return (
            <Button
                disableRipple={true}
                disableTouchRipple={true}
                centerRipple={false}
                focusRipple={false}
                component={Link}
                to={navLink}
                sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    ":hover": {color: "#8c8c8c"},
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    paddingX: 3
                }}
            >
                {text}
            </Button>
        );
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: '#191919',
                top: 0,
                zIndex: 1000,
                boxShadow: 'none'
            }}
        >
            <Toolbar sx={{display: "flex", justifyContent: "center"}}>
                {!isMobile && (
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexGrow: 1,
                        paddingY: 3
                    }}>
                        <NavigationButton text="Home" navLink="/"/>
                        <NavigationButton text="Portfolio" navLink="/portfolio"/>
                        <NavigationButton text="Equipment" navLink="/about"/>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: 4,
                            paddingRight: 4
                        }}>
                            <img
                                src={observatoryLogo}
                                alt="Observatory Icon"
                                style={{
                                    width: 'auto',
                                    height: '1rem',
                                    marginRight: '1rem'
                                }}/>
                            <img
                                src={personalLogo}
                                alt="Personal Icon"
                                style={{
                                    width: 'auto',
                                    height: '1rem',
                                    marginTop: '0.1rem'
                                }}/>
                        </Box>

                        <NavigationButton text="Gallery" navLink="/about"/>
                        <NavigationButton text="Blog" navLink="/about"/>
                        <NavigationButton text="About" navLink="/about"/>
                    </Box>
                )}

                {isMobile && (
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%"
                    }}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            flexGrow: 1,
                            paddingY: 2
                        }}>
                            <img
                                src={observatoryLogo}
                                alt="Observatory Icon"
                                style={{
                                    width: 'auto',
                                    height: 'auto'
                                }}/>
                            <img
                                src={personalLogo}
                                alt="Personal Icon"
                                style={{
                                    width: 'auto',
                                    height: 'auto'
                                }}/>
                        </Box>

                        <IconButton
                            sx={{color: "white"}}
                            onClick={handleMenuClick}
                        >
                            <span>Menu</span>
                        </IconButton>
                    </Box>
                )}

                <Menu
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    onClose={handleCloseMenu}
                >
                    <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Gallery</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>About</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Contact</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Blog</MenuItem>
                    {/* Add more items as needed */}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;