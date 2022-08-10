import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import Checkbox from '@mui/material/Checkbox';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // useParams,
    useRouteMatch
} from "react-router-dom";

import useAuth from '../../../hooks/useAuth';
// import HomeTeacherDashboard from '../HomeTeacherDashboard/HomeTeacherDashboard';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ClassIcon from '@mui/icons-material/Class';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import HomeClassSeven from '../ClassSeven/HomeClassSeven/HomeClassSeven';
import HomeAdminDashboard from '../HomeAdminDashboard/HomeAdminDashboard';
import AllUsers from '../AllUsers/AllUsers';



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
    // necessary for content to be below app bar
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
    const { admin } = useAuth();
    const { teacher } = useAuth();

    const drawer = (
        <div >
            {/* <Divider /> */}
            <Box sx={{ backgroundColor: '#110941', height: '650px' }} style={{ textAlign: 'center' }}>
                {/* <Box sx={{ height: '625px' }}> */}

                <Toolbar />

                
                <Link to='/'><Button
                    style={{
                        color: 'white',
                        // borderRadius: 35,
                        // backgroundColor: "#21b6ae",
                        // padding: "18px 36px",
                        fontSize: "16px"
                    }}
                >
                    <HomeIcon style={{ paddingRight: '2%', color: 'yellow' }}></HomeIcon>
                    Home</Button></Link><br></br>
                    <Link to={`${url}/allUsers`}><Button
                    style={{
                        color: 'white',
                        // borderRadius: 35,
                        // backgroundColor: "#21b6ae",
                        // padding: "18px 36px",
                        fontSize: "16px"
                    }}
                >

                    All Users</Button></Link><br></br>

                
               
                
                   
                    
            </Box>
            </div >
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ backgroundColor: '#110941' }}>
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
                        <MenuIcon style={{ color: 'yellow' }} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                       Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    // width: drawerWidth,
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
                <DrawerHeader sx={{ backgroundColor: '#110941' }}>
                    <Box >
                        <IconButton onClick={handleDrawerClose} style={{ color: 'white', fontSize: '2.5em' }}>
                            {theme.direction === 'ltr' ?
                                <ArrowCircleLeftIcon style={{ color: 'yellow' }} /> : <ChevronRightIcon />}
                        </IconButton>
                    </Box>
                </DrawerHeader>
                {/* <Divider style={{ color: ' #1d0326 ' }} /> */}
                <Divider style={{ backgroundColor: ' white ' }}></Divider>
                {drawer}

                </Drawer>
                <Box>
                    <Toolbar />
                    {/* exact path={`${path}`} */}
                    <Switch>
                        <Route exact path={path}>
                            <HomeAdminDashboard></HomeAdminDashboard>
                        </Route>
                        <Route exact path={`${path}/allUsers`}>
                        <AllUsers></AllUsers>
                    </Route>
                        
                        
                    </Switch>
                </Box>
    
                <Main open={open}>
                    <DrawerHeader />
                </Main>
            </Box >
        );
    }
    export default AdminDashboard;