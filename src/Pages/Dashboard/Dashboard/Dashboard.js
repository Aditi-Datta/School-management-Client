import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";

import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SevenRegistration from '../ClassSevenReg/SevenRegistration/SevenRegistration';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LayersIcon from '@mui/icons-material/Layers';
import SearchResult from '../SearchResult/SearchResult';
import Footer from '../../shared/Footer/Footer';
import EightRegistration from '../ClassEightReg/EightRegistration/EightRegistration';
import SixRegistration from '../ClassSixReg/SixRegistration/SixRegistration';
import NineRegistration from '../ClassNineReg/NineRegistration/NineRegistration';
import TenRegistration from '../ClassTenReg/TenRegistration/TenRegistration';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Container } from '@mui/system';
import '../../../App.css';

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

    const drawer = (
        <div >
           
            <Box sx={{ 
                backgroundColor: '#1b1b1b',
                 height: '90vh' ,overflowX:'hidden',overflowY:'hidden'}} style={{ textAlign: 'center'}}>
                <Toolbar />
                <Container style={{marginLeft:'5%'}}> 

                <Link to='/' style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                         <ListItem disablePadding>
                             <ListItemButton style={{borderRadius:'0 40px 40px 0', padding: '.4rem '}}>
                                 <ListItemIcon>
                             <OtherHousesIcon  style={{ color: 'white', fontSize: '1rem' }} />
                             </ListItemIcon>
                                 <ListItemText primary="Home" style={{marginLeft:'-2rem'}}/>
                             </ListItemButton>
                         </ListItem>
                </Link>
                <TreeView
                style={{
                     background: '#1b1b1b',
                    textAlign: 'left', marginLeft:'0%'
                    
                }}
                aria-label="file system navigator"
                defaultExpanded={['1']}


                defaultCollapseIcon={
                    <div style={{ padding: '.3rem 0', }}>
                        <ArrowDropUpIcon style={{ color: 'white', fontSize: '1.5rem' }} />
                    </div>}
                defaultExpandIcon={<div style={{ padding: '.3rem 0',  }}>
                    < ArrowDropDownIcon style={{ color: 'white', fontSize: '1.5rem' }} />
                </div>}
                        
                        sx={{  flexGrow: 1,  overflowY: 'hidden', overflowX:'hidden' }}
                    >
                   
                        <TreeItem nodeId="1" label="Registration"
                            style={{ color: 'white', background: '#1b1b1b' }}>
                            <Link to={`${url}/classSixRegistration`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                                <ListItem disablePadding>
                                    <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                     <ListItemIcon>
                                     <AppRegistrationIcon  style={{ color: 'white', fontSize: '1.1rem' }} />
                                    </ListItemIcon>
                                        <ListItemText primary="Six" style={{marginLeft:'-2rem'}}/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to={`${url}/classSevenRegistration`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                                <ListItem disablePadding>
                                    <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                    <ListItemIcon>
                                    <AppRegistrationIcon  style={{ color: 'white', fontSize: '1.1rem' }} />
                                   </ListItemIcon>
                                        <ListItemText primary="Seven" style={{marginLeft:'-2rem'}} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to={`${url}/classEightRegistration`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                                <ListItem disablePadding>
                                    <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                    <ListItemIcon>
                                    <AppRegistrationIcon  style={{ color: 'white', fontSize: '1.1rem' }} />
                                   </ListItemIcon>
                                        <ListItemText primary="Eight" style={{marginLeft:'-2rem'}} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to={`${url}/classNineRegistration`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                                <ListItem disablePadding>
                                    <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                    <ListItemIcon>
                                    <AppRegistrationIcon  style={{ color: 'white', fontSize: '1.1rem' }} />
                                   </ListItemIcon>
                                        <ListItemText primary="Nine" style={{marginLeft:'-2rem'}} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to={`${url}/classTenRegistration`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                                <ListItem disablePadding>
                                    <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                    <ListItemIcon>
                                    <AppRegistrationIcon  style={{ color: 'white', fontSize: '1.1rem' }} />
                                   </ListItemIcon>
                                        <ListItemText primary="Ten" style={{marginLeft:'-2rem'}} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </TreeItem>
                    </TreeView>

                <Link to={`${url}/SearchResult`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                         <ListItem disablePadding>
                             <ListItemButton style={{borderRadius:'0 40px 40px 0', padding: '.4rem '}}>
                                 <ListItemIcon>
                                 <LayersIcon   style={{ color: 'white', fontSize: '1rem' }} />
                             </ListItemIcon>
                                 <ListItemText primary="Result" style={{marginLeft:'-2rem'}}/>
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
                        <MenuIcon style={{ color: 'gray' }} className='buttonHover'/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                       Dashboard
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
                                <ArrowCircleLeftIcon style={{ color: 'gray' }} /> : <ChevronRightIcon />}
                        </IconButton>
                    </Box>
                </DrawerHeader>
                <Divider style={{ backgroundColor: ' white ' }}></Divider>
                {drawer}

               
            </Drawer>
            <Box>
                <Toolbar />
              
                <Switch>
             {user.emailVerified? 

                <Box>
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
                </Box>

                :<p>Your email is not verified</p>} 
                
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
