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
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddTeacher from '../AddTeacher/AddTeacher';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
import AttendanceTable from '../AttendanceTable/AttendanceTable';
// import StudentSubmitModal from '../StudentSubmitModal/StudentSubmitModal';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SevenRegistration from '../ClassSevenReg/SevenRegistration/SevenRegistration';
import ClassIcon from '@mui/icons-material/Class';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AllUsers from '../AllUsers/AllUsers';

import BanglaAttendanceTableSeven from '../../TeacherDashboard/ClassSeven/AttendanceTableSeven/BanglaAttendanceTableSeven/BanglaAttendanceTableSeven';
import AddResult from '../AddResult/AddResult';
import SearchResult from '../SearchResult/SearchResult';
import Footer from '../../shared/Footer/Footer';
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
    const { admin } = useAuth();
    const { teacher } = useAuth();

    const drawer = (
        <div >
            {/* <Divider /> */}
            <Box sx={{ backgroundColor: '#110941', height: '650px' }} style={{ textAlign: 'center' }}>
                {/* <Box sx={{ height: '625px' }}> */}

                <Toolbar />

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
                    Home</Button></Link>

               
                

                <Link to={`${url}/studentDashboard`}><Button
                    style={{
                        color: 'white',
                        fontSize: "16px"
                    }}
                >
                    <AppRegistrationIcon style={{ color: 'yellow' }} />
                    Student Register</Button></Link>

                    <Link to={`${url}/SearchResult`}><Button
                    style={{
                        color: 'white',
                        fontSize: "16px"
                    }}
                >Search Result</Button></Link>

                <Link to={`${url}/class7Registration`}><Button
                    style={{
                        color: 'white',
                        fontSize: "16px"
                    }}
                >
                    <ClassIcon style={{ color: 'yellow' }} />
                    Class 7 </Button></Link>

               
                {
                    admin && <Box>
                        <Link to={`${url}/makeAdmin`}><Button
                            style={{
                                color: 'white',
                                fontSize: "16px"
                            }}
                        >Make Admin</Button></Link>
                        <Link to={`${url}/addTeacher`}><Button
                            style={{
                                color: 'white',
                                fontSize: "16px"
                            }}
                        >Add Teacher</Button></Link>
                        <Link to={`${url}/Result`}><Button
                            style={{
                                color: 'white',
                                fontSize: "16px"
                            }}
                        >Add Result</Button></Link>

                        
                    </Box>
                }
            </Box>

            {/*  <List>
               
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
    </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
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
                        <MenuIcon style={{ color: 'yellow' }} />
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
                                <ArrowCircleLeftIcon style={{ color: 'yellow' }} /> : <ChevronRightIcon />}
                        </IconButton>
                    </Box>
                </DrawerHeader>
                {/* <Divider style={{ color: ' #1d0326 ' }} /> */}
                <Divider style={{ backgroundColor: ' white ' }}></Divider>
                {drawer}

                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))} */}
                {/* </List> */}
                {/* <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>
            <Box>
                <Toolbar />
              
                <Switch>
             {user.emailVerified? <Route exact path={path}>
                    <DashboardHome ></DashboardHome>
                </Route>:<p>not verified</p>} 
               
                   
                <Route exact path={path}>
                    <DashboardHome ></DashboardHome>
                </Route>

                    <Route exact path={`${path}/allUsers`}>
                        <AllUsers></AllUsers>
                    </Route>
                    <Route exact path={`${path}/studentDashboard`}>
                        <StudentDashboard ></StudentDashboard>
                    </Route>
                    
                    <Route exact path={`${path}/class7Registration`}>
                        <SevenRegistration></SevenRegistration>
                    </Route>
                    <Route exact path={`${path}/SearchResult`}>
                        <SearchResult></SearchResult>
                    </Route>
                    
                    
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addTeacher`}>
                        <AddTeacher ></AddTeacher>
                    </AdminRoute>
                    <AdminRoute path={`${path}/Result`}>
                    <AddResult></AddResult>
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
