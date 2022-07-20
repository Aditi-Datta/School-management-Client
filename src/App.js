import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";

import Home from "./Pages/HomePage/Home/Home";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/privateRoute/privateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AboutUs from './Pages/HomePage/Attendance/Attendance/AboutUs';
import ContactUs from './Pages/HomePage/ContactUs/ContactUs';

import backgroundImg from '../src/images/background.jpg';
import TeacherDashboard from './Pages/TeacherDashboard/TeacherDashboard/TeacherDashboard';
import MathAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/MathAttendanceTableSeven/MathAttendanceTableSeven';
import EnglishAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/EnglishAttendanceTableSeven/EnglishAttendanceTableSeven';
import BanglaAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/BanglaAttendanceTableSeven/BanglaAttendanceTableSeven';

// const bannerBackground = {
//   background: `url(${backgroundImg})`,
// }

function App() {
  return (
    <div className="App" >

      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/contactUs">
              <ContactUs />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/teacher">
              <TeacherDashboard/>
            </PrivateRoute>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>



            <Route path="/SevenMath">
              <MathAttendanceTableSeven />
            </Route>
            <Route path="/SevenEnglish">
              <EnglishAttendanceTableSeven />
            </Route>
            <Route path="/SevenBangla">
              <BanglaAttendanceTableSeven />
            </Route>



          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
