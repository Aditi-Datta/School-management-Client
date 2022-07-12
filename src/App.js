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
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/aboutus">
              <AboutUs />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
