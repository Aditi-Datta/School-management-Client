import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {
    Switch,
    Route,
    Link,
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
import { Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LayersIcon from '@mui/icons-material/Layers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TreeItem, TreeView } from '@mui/lab';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
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
            <Box sx={{ backgroundColor: '#1b1b1b',
            height: '90vh' ,overflowX:'hidden',overflowY:'hidden'}} style={{ textAlign: 'center' }}>
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
                 
                      <TreeItem nodeId="1" label="Attendance"
                          style={{ color: 'white', background: '#1b1b1b' }}>
                          <Link to={`${url}/classSix`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                              <ListItem disablePadding>
                                  <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                   <ListItemIcon>
                                   <CalendarMonthIcon  style={{ color: 'white', fontSize: '1.1rem' }} />
                                  </ListItemIcon>
                                      <ListItemText primary="Class VI" style={{marginLeft:'-2rem'}}/>
                                  </ListItemButton>
                              </ListItem>
                          </Link>
                          <Link to={`${url}/classSeven`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                              <ListItem disablePadding>
                                  <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                  <ListItemIcon>
                                  <CalendarMonthIcon  style={{ color: 'white', fontSize: '1.1rem' }} />
                                 </ListItemIcon>
                                      <ListItemText primary="Class VII" style={{marginLeft:'-2rem'}} />
                                  </ListItemButton>
                              </ListItem>
                          </Link>
                          <Link to={`${url}/classEight`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                              <ListItem disablePadding>
                                  <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                  <ListItemIcon>
                                  <CalendarMonthIcon  style={{ color: 'white', fontSize: '1.1rem' }} />
                                 </ListItemIcon>
                                      <ListItemText primary="Class VIII" style={{marginLeft:'-2rem'}} />
                                  </ListItemButton>
                              </ListItem>
                          </Link>
                          <Link to={`${url}/classNine`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                              <ListItem disablePadding>
                                  <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                  <ListItemIcon>
                                  <CalendarMonthIcon  style={{ color: 'white', fontSize: '1.1rem' }} />
                                 </ListItemIcon>
                                      <ListItemText primary="Class IX" style={{marginLeft:'-2rem'}} />
                                  </ListItemButton>
                              </ListItem>
                          </Link>
                          <Link to={`${url}/classTen`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                              <ListItem disablePadding>
                                  <ListItemButton style={{borderRadius:'0 40px 40px 0', marginLeft:'15%'}}>
                                  <ListItemIcon>
                                  <CalendarMonthIcon style={{ color: 'white', fontSize: '1.1rem' }} />
                                 </ListItemIcon>
                                      <ListItemText primary="Class X" style={{marginLeft:'-2rem'}} />
                                  </ListItemButton>
                              </ListItem>
                          </Link>
                      </TreeItem>
                  </TreeView>

                
                  <Link to={`${url}/Result`} style={{ textDecoration: 'none', width: '100%', color: 'white' }}>
                  <ListItem disablePadding>
                      <ListItemButton style={{borderRadius:'0 40px 40px 0', padding: '.4rem '}}>
                          <ListItemIcon>
                          <LayersIcon   style={{ color: 'white', fontSize: '1rem' }} />
                      </ListItemIcon>
                          <ListItemText primary="AddResult" style={{marginLeft:'-2rem'}}/>
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
                        
                        <MenuIcon style={{ color: 'skyBlue' }} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                       Teacher Dashboard
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
                                <ArrowCircleLeftIcon style={{ color: 'skyBlue' }} /> : <ChevronRightIcon />}
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
           <Footer></Footer>
            </>
        );
    }
    export default TeacherDashboard;