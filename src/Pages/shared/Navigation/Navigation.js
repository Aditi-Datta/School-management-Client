import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../../images/llogo.jpg';
import profile from '../../../images/profile2.png';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Teacher from "../../TeacherDashboard/TeacherDashboard/TeacherDashboard";


const Navigation = () => {
    const { user, logout } = useAuth();
    const { teacher } = useAuth();


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#110941' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <LightbulbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} style={{ color: 'yellow' }} />
                        <Typography
                            variant="h6"

                            sx={{

                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                flexGrow: 1,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Leading Light School & College
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box style={{ textAlign: "center" }}>
                                        <Link to="/home"><Button color="inherit" sx={{ color: 'green', }}>Home</Button></Link><br />
                                        <Link to="/aboutus"><Button color="inherit" sx={{ color: 'green' }}>About</Button></Link><br />
                                        <Link to="/contactUs"><Button color="inherit" sx={{ color: 'green' }}>Contact</Button></Link><br />
                                        <Link to="/dashboard"><Button color="inherit" sx={{ color: 'green' }}>Dashboard</Button></Link><br />

                                        {teacher &&
                                            < Link to="/teacher"><Button color="inherit" sx={{ color: 'white' }}>Teacher </Button></Link>
                                        }


                                        {
                                            user?.email ?
                                                <Box>
                                                    
                                                    <Button onClick={logout} color="inherit" sx={{ color: 'green' }}>Logout</Button><br />
                                                </Box>
                                                :
                                                <NavLink to="/login"><Button color="inherit" sx={{ color: 'green' }}>Login</Button></NavLink>
                                        }

                                    </Box>

                                </MenuItem>

                            </Menu>
                        </Box>
                        <LightbulbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} style={{ color: 'yellow' }} />

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Leading Light School & College
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>

                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white' }}
                            >
                                <Link to="/home"><Button color="inherit" sx={{
                                    color: 'white'
                                }}>Home</Button></Link>
                                <Link to="/aboutus"><Button color="inherit" sx={{ color: 'white' }}>About</Button></Link>
                                <Link to="/contactUs"><Button color="inherit" sx={{ color: 'white' }}>Contact</Button></Link>
                                <Link to="/dashboard"><Button color="inherit" sx={{ color: 'white' }}>Dashboard</Button></Link>


                                {teacher &&
                    < Link to="/teacher"><Button color="inherit" sx={{ color: 'white' }}>Teacher </Button></Link>
                }


                                {
                                    user?.email ?
                                        <Box>
                                            
                                            <Button onClick={logout} color="inherit" sx={{ color: 'white' }}>Logout</Button>
                                        </Box>
                                        :
                                        <NavLink to="/login"><Button color="inherit" sx={{ color: 'white' }}>Login</Button></NavLink>
                                }
                            </Button>

                        </Box>

                    </Toolbar>
                </Container>

                {/* <Toolbar>
                     <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon /> 
                     </IconButton> 
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                        School Management
                    </Typography>
                    <Link to="/home"><Button color="inherit" sx={{ color: 'white' }}>Home</Button></Link>
                    <Link to="/aboutus"><Button color="inherit" sx={{ color: 'white' }}>AboutUs</Button></Link>
                    <Link to="/contactUs"><Button color="inherit" sx={{ color: 'white' }}>ContactUs</Button></Link>


                    {
                        user?.email ?
                            <Box>
                                <NavLink to="/dashboard"><Button color="inherit" sx={{ color: 'white' }}>Dashboard</Button></NavLink>
                                <Button onClick={logout} color="inherit" sx={{ color: 'white' }}>Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login"><Button color="inherit" sx={{ color: 'white' }}>Login</Button></NavLink>
                    }


                </Toolbar> */}
            </AppBar>
        </Box >
    );
};

export default Navigation;