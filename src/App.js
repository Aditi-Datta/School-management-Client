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
// import AboutUs from './Pages/HomePage/Attendance/Attendance/AboutUs';
import ContactUs from './Pages/HomePage/ContactUs/ContactUs';

import backgroundImg from '../src/images/background.jpg';
import TeacherDashboard from './Pages/TeacherDashboard/TeacherDashboard/TeacherDashboard';
// import MathAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/MathAttendanceTableSeven/MathAttendanceTableSeven';
// import EnglishAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/EnglishAttendanceTableSeven/EnglishAttendanceTableSeven';
// import BanglaAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/BanglaAttendanceTableSeven/BanglaAttendanceTableSeven';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
// import ScienceAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/ScienceAttendanceTableSeven/ScienceAttendanceTableSeven';
import SociologyAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/SociologyAttendanceTableSeven';
import ScienceAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/ScienceAttendanceTableSeven';
import MathAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/MathAttendanceTableSeven';
import EnglishAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/EnglishAttendanceTableSeven';
import BanglaAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/BanglaAttendanceTableSeven';
import AboutUs from './Pages/HomePage/AboutUs/AboutUs';
import BanglaAttendanceTableEight from './Pages/TeacherDashboard/ClassEight/AttendanceTableEight/BanglaAttendanceTableEight';
import EnglishAttendanceTableEight from './Pages/TeacherDashboard/ClassEight/AttendanceTableEight/EnglishAttendanceTableEight';
import MathAttendanceTableEight from './Pages/TeacherDashboard/ClassEight/AttendanceTableEight/MathAttendanceTableEight';
import ScienceAttendanceTableEight from './Pages/TeacherDashboard/ClassEight/AttendanceTableEight/ScienceAttendanceTableEight';
import SociologyAttendanceTableEight from './Pages/TeacherDashboard/ClassEight/AttendanceTableEight/SociologyAttendanceTableEight';
import BanglaAttendanceTableNine from './Pages/TeacherDashboard/ClassNine/AttendanceTableNine/BanglaAttendanceTableNine';
import EnglishAttendanceTableNine from './Pages/TeacherDashboard/ClassNine/AttendanceTableNine/EnglishAttendanceTableNine';
import MathAttendanceTableNine from './Pages/TeacherDashboard/ClassNine/AttendanceTableNine/MathAttendanceTableNine';
import ScienceAttendanceTableNine from './Pages/TeacherDashboard/ClassNine/AttendanceTableNine/ScienceAttendanceTableNine';
import SociologyAttendanceTableNine from './Pages/TeacherDashboard/ClassNine/AttendanceTableNine/SociologyAttendanceTableNine';
import BanglaAttendanceTableSix from './Pages/TeacherDashboard/ClassSix/AttendanceTableSix/BanglaAttendanceTableSix';
import EnglishAttendanceTableSix from './Pages/TeacherDashboard/ClassSix/AttendanceTableSix/EnglishAttendanceTableSix';
import MathAttendanceTableSix from './Pages/TeacherDashboard/ClassSix/AttendanceTableSix/MathAttendanceTableSix';
import ScienceAttendanceTableSix from './Pages/TeacherDashboard/ClassSix/AttendanceTableSix/ScienceAttendanceTableSix';
import SociologyAttendanceTableSix from './Pages/TeacherDashboard/ClassSix/AttendanceTableSix/SociologyAttendanceTableSix';
import BanglaAttendanceTableTen from './Pages/TeacherDashboard/ClassTen/AttendanceTableTen/BanglaAttendanceTableTen';
import EnglishAttendanceTableTen from './Pages/TeacherDashboard/ClassTen/AttendanceTableTen/EnglishAttendanceTableTen';
import MathAttendanceTableTen from './Pages/TeacherDashboard/ClassTen/AttendanceTableTen/MathAttendanceTableTen';
import ScienceAttendanceTableTen from './Pages/TeacherDashboard/ClassTen/AttendanceTableTen/ScienceAttendanceTableTen';
import SociologyAttendanceTableTen from './Pages/TeacherDashboard/ClassTen/AttendanceTableTen/SociologyAttendanceTableTen';
import IctAttendanceTableSix from './Pages/TeacherDashboard/ClassSix/AttendanceTableSix/IctAttendanceTableSix';
import IctAttendanceTableSeven from './Pages/TeacherDashboard/ClassSeven/AttendanceTableSeven/IctAttendanceTableSeven';
import IctAttendanceTableEight from './Pages/TeacherDashboard/ClassEight/AttendanceTableEight/IctAttendanceTableEight';
import IctAttendanceTableNine from './Pages/TeacherDashboard/ClassNine/AttendanceTableNine/IctAttendanceTableNine';
import IctAttendanceTableTen from './Pages/TeacherDashboard/ClassTen/AttendanceTableTen/IctAttendanceTableTen';

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
            <PrivateRoute path="/admin">
              <AdminDashboard/>
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




            <Route path="/SixBangla">
                <BanglaAttendanceTableSix/>
            </Route>
            <Route path="/SixEnglish">
                <EnglishAttendanceTableSix/>
            </Route>
            <Route path="/SixMath">
                <MathAttendanceTableSix/>
            </Route>
            <Route path="/SixScience">
                <ScienceAttendanceTableSix/>
            </Route>
            <Route path="/SixSociology">
                <SociologyAttendanceTableSix/>
            </Route>
            <Route path="/SixICT">
                <IctAttendanceTableSix/>
            </Route>

            <Route path="/SevenMath">
              <MathAttendanceTableSeven />
            </Route>
            <Route path="/SevenEnglish">
              <EnglishAttendanceTableSeven />
            </Route>
            <Route path="/SevenBangla">
              <BanglaAttendanceTableSeven/>
            </Route>
            <Route path="/SevenScience">
              <ScienceAttendanceTableSeven />
            </Route>
            <Route path="/SevenSociology">
              <SociologyAttendanceTableSeven />
            </Route>
            <Route path="/SevenICT">
              <IctAttendanceTableSeven />
            </Route>

            <Route path="/EightBangla">
              <BanglaAttendanceTableEight/>
            </Route>
            <Route path="/EightEnglish">
              <EnglishAttendanceTableEight/>
            </Route>
            <Route path="/EightMath">
              <MathAttendanceTableEight/>
            </Route>
            <Route path="/EightScience">
              <ScienceAttendanceTableEight/>
            </Route>
            <Route path="/EightSociology">
              <SociologyAttendanceTableEight/>
            </Route>
            <Route path="/EightICT">
              <IctAttendanceTableEight/>
            </Route>
          
            <Route path="/NineBangla">
              <BanglaAttendanceTableNine/>
            </Route>
            <Route path="/NineEnglish">
              <EnglishAttendanceTableNine/>
            </Route>
            <Route path="/NineMath">
              <MathAttendanceTableNine/>
            </Route>
            <Route path="/NineScience">
              <ScienceAttendanceTableNine/>
            </Route>
            <Route path="/NineSociology">
              <SociologyAttendanceTableNine/>
            </Route>
            <Route path="/NineICT">
              <IctAttendanceTableNine/>
            </Route>

            <Route path="/TenBangla">
                <BanglaAttendanceTableTen/>
            </Route>
            <Route path="/TenEnglish">
              <EnglishAttendanceTableTen/>
            </Route>
            <Route path="/TenMath">
              <MathAttendanceTableTen/>
            </Route>
            <Route path="/TenScience">
              <ScienceAttendanceTableTen/>
            </Route>
            <Route path="/TenSociology">
              <SociologyAttendanceTableTen/>
            </Route>
            <Route path="/TenICT">
              <IctAttendanceTableTen/>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
