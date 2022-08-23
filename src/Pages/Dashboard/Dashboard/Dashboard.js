import * as React from 'react';
// import useState from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
// import StudentSubmitModal from '../StudentSubmitModal/StudentSubmitModal';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SevenRegistration from '../ClassSevenReg/SevenRegistration/SevenRegistration';
import ClassIcon from '@mui/icons-material/Class';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LayersIcon from '@mui/icons-material/Layers';

import SearchResult from '../SearchResult/SearchResult';
import Footer from '../../shared/Footer/Footer';
import MakeTeacher from '../MakeTeacher/MakeTeacher';
import EightRegistration from '../ClassEightReg/EightRegistration/EightRegistration';
import SixRegistration from '../ClassSixReg/SixRegistration/SixRegistration';
import NineRegistration from '../ClassNineReg/NineRegistration/NineRegistration';
import TenRegistration from '../ClassTenReg/TenRegistration/TenRegistration';
import { Grid } from '@mui/material';
// import { ListItem } from '@mui/material';
// const drawerWidth = 200;
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


// function Dashboard(prop) {
function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const { user } = useAuth();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let { path, url } = useRouteMatch();
    // const { admin } = useAuth();
    // const { teacher } = useAuth();

    const drawer = (
        <div >
            {/* <Divider /> */}
            <Box sx={{ backgroundColor: 'black', height: '650px' }} style={{ textAlign: 'center' }}>
                {/* <Box sx={{ height: '625px' }}> */}

                <Toolbar />

               <Grid container spacing={2} style={{marginLeft:'10%'}}>

               <Grid xs={4}>
                <Box style={{color:'skyBlue', fontSize:'8%'}}>
                    <List>  <OtherHousesIcon /> </List>
                    <List>  <AppRegistrationIcon /> </List>
                    <List>  <AppRegistrationIcon /> </List>
                    <List>  <AppRegistrationIcon /> </List>
                    <List>  <AppRegistrationIcon /> </List>
                    <List>  <AppRegistrationIcon /> </List>
                    <List>  <LayersIcon /> </List>
                   
                    
                </Box>
               </Grid>
               
               
                <Grid xs={8} style={{textAlign:'left'}}>
                <Box>

                <Link to='/'><Button
                style={{
                    color: 'white',
                    fontSize: "16px"
                }}
            >  Home</Button></Link><br/>  


                <Link to={`${url}/classSixRegistration`}><Button
                style={{
                    color: 'white',
                    fontSize: "16px"
                }}
            > Six</Button></Link> <br/>
            
                <Link to={`${url}/classSevenRegistration`}><Button
                style={{
                    color: 'white',
                    fontSize: "16px"
                }}
            >
                
                Seven </Button></Link> <br/>
                <Link to={`${url}/classEightRegistration`}><Button
                style={{
                    color: 'black',
                    fontSize: "16px",
                    textDecoration:'none'
                }}
            >
                
                Eight </Button></Link> <br/>
                <Link to={`${url}/classNineRegistration`}><Button
                style={{
                    color: 'white',
                    fontSize: "16px"
                }}
            >
                
                Nine </Button></Link> <br/>
                <Link to={`${url}/classTenRegistration`}><Button
                style={{
                    color: 'white',
                    fontSize: "16px"
                }}
            >
                {/*<ClassIcon style={{ color: 'yellow' }} />*/}
                Ten </Button></Link> <br/>
                <Link to={`${url}/SearchResult`}><Button
                style={{
                    color: 'white',
                    fontSize: "16px"
                }}
            >Result</Button></Link>
                </Box>

                </Grid>
                </Grid>
            </Box>

            
            
        </div >
    );

  
console.log(user);
console.log(user.emailVerified);
    return (
        <>
      
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
                        <MenuIcon style={{ color: 'skyBlue' }} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                       Dashboard
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
                                <ArrowCircleLeftIcon style={{ color: 'skyBlue' }} /> : <ChevronRightIcon />}
                        </IconButton>
                    </Box>
                </DrawerHeader>
                {/* <Divider style={{ color: ' #1d0326 ' }} /> */}
                <Divider style={{ backgroundColor: ' white ' }}></Divider>
                {drawer}

               
            </Drawer>
            <Box>
                <Toolbar />
              
                <Switch>
             {user.emailVerified? <Route exact path={path}>
                    <DashboardHome ></DashboardHome>
                </Route>:<p>Your email is not verified</p>} 
               
                   
                <Route exact path={path}>
                    <DashboardHome ></DashboardHome>
                </Route>

                    
                   
                    <Route exact path={`${path}/classSixRegistration`}>
                        <SixRegistration></SixRegistration>
                    </Route>
                    <Route exact path={`${path}/classSevenRegistration`}>
                        <SevenRegistration></SevenRegistration>
                    </Route>
                    <Route exact path={`${path}/classEightRegistration`}>
                        <EightRegistration></EightRegistration>
                    </Route>
                    <Route exact path={`${path}/classNineRegistration`}>
                        <NineRegistration></NineRegistration>
                    </Route>
                    <Route exact path={`${path}/classTenRegistration`}>
                        <TenRegistration></TenRegistration>
                    </Route>
                    <Route exact path={`${path}/SearchResult`}>
                        <SearchResult></SearchResult>
                    </Route>
                   
                    <AdminRoute path={`${path}/makeTeacher`}>
                    <MakeTeacher></MakeTeacher>
                    </AdminRoute>

                </Switch>
           </Box>

            <Main open={open}>
                <DrawerHeader />

            </Main>
            
            </Box>
            <Footer></Footer>
            </>
           
      
    );
}

export default Dashboard;
