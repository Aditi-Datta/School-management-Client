import React from "react";
import TextField from '@mui/material/TextField';
import { Box, height } from "@mui/system";
import { Button, Typography, Alert  } from "@mui/material";
import backgroundImg from "../../../images/sky1.jpg";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const bannerBackground = {
    background: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(27, 44, 84 ,0.1)',
    backgroundBlendMode: 'darken, luminosity',
    width: '100vw',
    height: '70vH'

}

const ContactUsForm = () => {

    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    const initialInfo = { Name: user.displayName, email: user.email, review:'' }
    const [userInfo, setUserInfo] = useState(initialInfo);

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...userInfo };
        newInfo[field] = value;
        setUserInfo(newInfo);
    }

    const handleContactUs = e => {

        // collect data
        const ContactUs = {
            ...userInfo,
        }

        // send to the server
        fetch('https://secure-temple-79203.herokuapp.com/contactUs', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
         },
            body: JSON.stringify(ContactUs)
        })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        if (data.insertedId) {
            setSuccess(true);
        }
    });

    e.preventDefault();
    }

    return (
<>
            <div style={bannerBackground} sx={{ height:'100vh'}}>
            <Box container  style={{textAlign: 'center',paddingTop:'5%'}}>

            <Typography variant="h4" style={{margin:15}}>Contact With Us</Typography>

            <form onSubmit={handleContactUs}>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Say something about us" 
            color="secondary"
            onBlur={handleOnBlur} 
            name='review'
            required
            focused />

            <br></br>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Name" 
            color="secondary" 
            onBlur={handleOnBlur} 
            defaultValue={user.displayName}
            focused />

            <br></br>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Email" 
            color="secondary" 
            onBlur={handleOnBlur} 
            defaultValue={user.email}
            
            focused />
            <br></br>
           

            <Button variant="contained" type="submit" style={{marginLeft:'40%', marginTop:'2%', padding:'10px 22px'}}>Submit</Button> <br></br>

            </form>
            </Box>
            </div>
            
        {success && <Alert severity="success">Thanks for your precious review we store it successfully!!! 🧡🧡 </Alert>}
        </>
      

        );
    };
export default ContactUsForm;