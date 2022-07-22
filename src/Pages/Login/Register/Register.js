import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import * as React from 'react';
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../../hooks/useAuth";
import studentLogin from "../../../images/studentLogin.png";
import Navigation from "../../shared/Navigation/Navigation";
import Footer from "../../shared/Footer/Footer";

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const [error, setError] = useState('');
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (loginData.password.length < 6) {
            setError('Password Must be at least 6 characters long');
            return;
        }

        if (!/((?=.*\d)(?=.*[a-zA-Z])(?=(.*\W){2}).{8,})/.test(loginData.password)) {
            setError('Password Must contain 1 digit,1 alphabet,2 special character & 8 characters long');
            return;
        }
        // /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/
        if (loginData.password !== loginData.conpassword) {
            alert("your password didn't match!!!");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);


    }
    return (
        <>

            <Navigation></Navigation>

            <Container>
                <Grid container spacing={2} sx={{ml:'6%'}}>

                <Grid item xs={12} md={6} sx={{mt: 10  }}>
                        <img style={{ width: '78%' }} src={studentLogin} alt="" />

                    </Grid>

                    <Grid item sx={{ mt: 14 }} xs={12} md={6}>
                        <Typography variant="h4" gutterBottom sx={{ml:'30%'}}>
                            Register
                        </Typography>

                        {!isLoading && <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                name="email"
                                type="email"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Confirm Password"
                                type="password"
                                name="conpassword"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />



                            <Button sx={{ width: '75%', m: 3 ,ml:1}}
                                type="submit" variant="contained">Register
                            </Button>

                            
                                <Box style={{color:'red',textAlign:'center'}}>{error}</Box>
                            

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/login'>
                                <Button variant="text" sx={{ml:11}}>Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}

                        {user?.email && <Alert severity="success">Registered successfully!!! </Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}                  

                    </Grid>
                    

                </Grid>
            </Container>

            <Footer></Footer>
        </>
    );
};
export default Register;