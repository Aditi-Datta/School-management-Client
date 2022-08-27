import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import studentLogin from "../../../images/studentLogin.png";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../shared/Navigation/Navigation";
import Footer from "../../shared/Footer/Footer";

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, signInWithGoogle, isLoading, authError,handleResetPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    const handleForgetPassword = () => {
        handleResetPassword(loginData.email);
    }
    

    return (
        <>

            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2} sx={{ml:'6%'}}>

                <Grid item xs={12} md={6} sx={{ mt: 10 }}>
                <img style={{ width: '78%' }} src={studentLogin} alt="" />

            </Grid>

                    <Grid item sx={{ mt: 18 }} xs={12} md={6}>
                        <Typography variant="h4" gutterBottom sx={{ml:'30%'}}>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                name="email"
                                type="email"
                                required
                                onChange={handleOnChange}
                                variant="standard" />
                            {/* <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Student Id"
                            name="email"

                            onChange={handleOnChange}
                            variant="standard" /> */}
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"
                                required
                                onChange={handleOnChange}
                                variant="standard" />
                                <br></br>

                            <Button sx={{ width: '75%',  m: 3,ml:1 }}
                                type="submit" variant="contained">Login
                            </Button>

                            <br></br>

                            
                                <Button variant="link" sx={{}} onClick={handleForgetPassword}>Forgotten Password?</Button>
                          
                            <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button variant="text" sx={{ml:'14%', color:'black'}} >Create New account</Button>
                        </NavLink>
                            <br></br>

                            {isLoading && <CircularProgress />}

                            {user?.email && <Alert severity="success"  >Login successfully!!! </Alert>}

                            {authError && <Alert severity="error">{authError}</Alert>}
                            {/* <p>--------------------------------------</p> */} <br></br>

                            <Button onClick={handleGoogleSignIn} sx={{ml:12,p:1}} variant="contained" style={{   width: '45%',  backgroundColor:'green'}}>Login with Google</Button><br></br>

                           
                            

                            
                        </form>




                    </Grid>
                   

                </Grid>
            </Container>

            <Footer></Footer>
        </>
    );
};
export default Login;