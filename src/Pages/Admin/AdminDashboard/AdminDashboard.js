import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import HomeAdminDashboard from '../HomeAdminDashboard/HomeAdminDashboard';
import AllUsers from '../AllUsers/AllUsers';
import AddTeacher from '../AddTeacher/AddTeacher';
import {ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import GroupIcon from '@mui/icons-material/Group';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Footer from '../../shared/Footer/Footer';
import { Container } from '@mui/system';



const drawerWidth = 230;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function AdminDashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let { path, url } = useRouteMatch();

    const drawer = (
        <div >
            <Box sx={{ backgroundColor: '#1b1b1b', height: '90vh' ,overflowX:'hidden',overflowY:'hidden' }} style={{ textAlign: 'center' }}>
                <Toolbar />

                <Container style={{marginLeft:'12%'}}> 

                
                <Link to='/' style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                <ListItem disablePadding>
                    <ListItemButton style={{borderRadius:'0 40px 40px 0', padding: '.4rem '}}>
                        <ListItemIcon>
                    <OtherHousesIcon  style={{ color: 'white', fontSize: '1.2rem' }} />
                    </ListItemIcon>
                        <ListItemText primary="Home" style={{marginLeft:'-1.5rem'}}/>
                    </ListItemButton>
                </ListItem>
                 </Link>


                 <Link to={`${url}/allUsers`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                <ListItem disablePadding>
                    <ListItemButton style={{borderRadius:'0 40px 40px 0', padding: '.4rem '}}>
                        <ListItemIcon>
                    <GroupIcon  style={{ color: 'white', fontSize: '1.2rem' }} />
                    </ListItemIcon>
                        <ListItemText primary="Users" style={{marginLeft:'-1.5rem'}}/>
                    </ListItemButton>
                </ListItem>
                 </Link>

                 <Link to={`${url}/addTeacher`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                 <ListItem disablePadding>
                     <ListItemButton style={{borderRadius:'0 40px 40px 0', padding: '.4rem '}}>
                         <ListItemIcon>
                     <AddModeratorIcon  style={{ color: 'white', fontSize: '1.2rem' }} />
                     </ListItemIcon>
                         <ListItemText primary="AddTeacher" style={{marginLeft:'-1.5rem'}}/>
                     </ListItemButton>
                 </ListItem>
                  </Link>
               
              
                
                   

                    </Container>
            </Box>
            
            </div >
    );

    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ backgroundColor: '#1b1b1b' }}>
                <Toolbar>
                    <IconButton
                        backgroundColor="white"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        style={{ color: 'white' }}
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        {/* <MenuIcon />*/}
                        <MenuIcon style={{ color: '#c9d4d5' }} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                       Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    mx: 5,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },

                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ backgroundColor: '#1b1b1b' }}>
                    <Box >
                        <IconButton onClick={handleDrawerClose} style={{ color: 'white', fontSize: '2.5em' }}>
                            {theme.direction === 'ltr' ?
                                <ArrowCircleLeftIcon style={{ color: '#c9d4d5' }} /> : <ChevronRightIcon />}
                        </IconButton>
                    </Box>
                </DrawerHeader>
                <Divider style={{ backgroundColor: ' white ' }}></Divider>
                {drawer}

                </Drawer>
                <Box>
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <HomeAdminDashboard></HomeAdminDashboard>
                        </Route>
                        <Route exact path={`${path}/allUsers`}>
                        <AllUsers></AllUsers>
                    </Route>
                        <Route exact path={`${path}/addTeacher`}>
                        <AddTeacher></AddTeacher>
                    </Route>
                        
                        
                    </Switch>
                </Box>
    
                <Main open={open}>
                    <DrawerHeader />
                </Main>
            </Box >
            <Footer></Footer>
            </>
        );
    }
    export default AdminDashboard;