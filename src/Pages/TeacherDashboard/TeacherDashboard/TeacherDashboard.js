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
import HomeTeacherDashboard from '../HomeTeacherDashboard/HomeTeacherDashboard';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ClassIcon from '@mui/icons-material/Class';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import HomeClassSeven from '../ClassSeven/HomeClassSeven/HomeClassSeven';
import AddResult from '../AddResult/AddResult';
import Footer from '../../shared/Footer/Footer';
import HomeClassEight from '../ClassEight/HomeClassEight/HomeClassEight';
import HomeClassNine from '../ClassNine/HomeClassNine/HomeClassNine';
import HomeClassSix from '../ClassSix/HomeClassSix/HomeClassSix';
import HomeClassTen from '../ClassTen/HomeClassTen/HomeClassTen';
import { Grid, List } from '@mui/material';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LayersIcon from '@mui/icons-material/Layers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TeacherFooter from '../../shared/TeacherFooter/TeacherFooter';
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

function TeacherDashboard() {
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
            {/* <Divider /> */}
            <Box sx={{ backgroundColor: '#7b0d69', height: '650px' }} style={{ textAlign: 'center' }}>
                {/* <Box sx={{ height: '625px' }}> */}

                <Toolbar />

                <Grid container spacing={2} style={{marginLeft:'7%'}}>

               <Grid xs={4}>
                <Box style={{color:'skyBlue', fontSize:'8%'}}>
                    <List>  <OtherHousesIcon /> </List>
                    <List>  <CalendarMonthIcon /> </List>
                    <List>  <CalendarMonthIcon /> </List>
                    <List>  <CalendarMonthIcon /> </List>
                    <List>  <CalendarMonthIcon /> </List>
                    <List>  <CalendarMonthIcon /> </List> 
                    <List>  <LayersIcon /> </List> 
                </Box>
               </Grid>

               <Grid xs={8} style={{textAlign:'left'}}>
               <Box>
                <Link to='/'><Button
                    style={{
                        color: 'white',
                        // borderRadius: 35,
                        // backgroundColor: "#21b6ae",
                        // padding: "18px 36px",
                        fontSize: "16px"
                    }}
                >
                    {/*<HomeIcon style={{ paddingRight: '2%', color: 'yellow' }}></HomeIcon>*/}
                    Home</Button></Link><br></br>

                
                    <Link to={`${url}/classSix`}><Button
                    style={{
                        color: 'white',
                        fontSize: "16px"
                    }}
                >Class VI </Button></Link><br/>
                
                    <Link to={`${url}/classSeven`}><Button
                    style={{
                        color: 'white',
                        fontSize: "16px"
                    }}
                >Class VII </Button></Link>

                    <Link to={`${url}/classEight`}><Button
                    style={{
                        color: 'white',
                        fontSize: "16px"
                    }}
                >Class VIII </Button></Link> <br/>
                    <Link to={`${url}/classNine`}><Button
                    style={{
                        color: 'white',
                        fontSize: "16px"
                    }}
                >Class IX </Button></Link><br/>
                    <Link to={`${url}/classTen`}><Button
                    style={{
                        color: 'white',
                        fontSize: "16px"
                    }}
                >Class X </Button></Link><br/>
                
                <Link to={`${url}/Result`}><Button
                style={{
                    color: 'white',
                    fontSize: "16px"
                }}
            >Add Result</Button></Link>
            </Box>  
            </Grid>
            </Grid>
        
            </Box>
            </div >
    );

    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ backgroundColor: '#7b0d69' }}>
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
                       Teacher Dashboard
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
                <DrawerHeader sx={{ backgroundColor: '#7b0d69' }}>
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
                    {/* exact path={`${path}`} */}
                    <Switch>
                        <Route exact path={path}>
                            <HomeTeacherDashboard></HomeTeacherDashboard>
                        </Route>
                        <Route exact path={`${path}/classSix`}>
                            <HomeClassSix></HomeClassSix>
                        </Route>
                        <Route exact path={`${path}/classSeven`}>
                            <HomeClassSeven></HomeClassSeven>
                        </Route>
                        <Route exact path={`${path}/classEight`}>
                            <HomeClassEight></HomeClassEight>
                        </Route>
                        <Route exact path={`${path}/classNine`}>
                            <HomeClassNine></HomeClassNine>
                        </Route>
                        <Route exact path={`${path}/classTen`}>
                            <HomeClassTen></HomeClassTen>
                        </Route>
                        <Route exact path={`${path}/Result`}>
                            <AddResult></AddResult>
                        </Route>
                        
                        
                    </Switch>
                </Box>
    
                <Main open={open}>
                    <DrawerHeader />
                </Main>
            </Box >
            <TeacherFooter></TeacherFooter>
            </>
        );
    }
    export default TeacherDashboard;