import React from "react";
import TextField from '@mui/material/TextField';
import { Box, height } from "@mui/system";
import { Button, Typography, Alert  } from "@mui/material";
import backgroundImg from "../../../images/sky1.jpg";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const bannerBackground = {
    
    backgroundColor:'#f8f8ff',
    borderRadius:'15px',
    borderWidth:  3, 
    textAlign:'center',
    width:'100vw',
    height:'100vh',
    marginTop:'5%',
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
            <div style={bannerBackground } sx={{ height:'100vh' }} >
            <Box container justifyContent='center' style={{textAlign: 'center',paddingTop:'5%'}}>

            <Typography variant="h4" style={{margin:15}}>Contact With Us</Typography>

            <form onSubmit={handleContactUs}>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Say something about us" 
            // color="secondary" 
            onBlur={handleOnBlur} 
            name='review'
            required
            
            
            focused 
            />

            <br></br>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Name" 
            // color="secondary" 
            onBlur={handleOnBlur} 
            defaultValue={user.displayName}
            textColor="white"
            // id="filled-hidden-label-small"
            focused />

            <br></br>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Email" 
            // color="secondary" 
            onBlur={handleOnBlur} 
            defaultValue={user.email}
            
            focused />
            <br></br>
           

            <Button variant="contained" type="submit" style={{marginLeft:'20%', marginTop:'2%',   padding:'15px 55px', backgroundColor:'#1fa4b7', borderRadius:'15px'}}>Submit</Button> <br></br>

            </form>
            </Box>
            </div>
            
        {success && <Alert severity="success">Thanks for your precious review we store it successfully!!! 🧡🧡 </Alert>}
        </>
      

        );
    };
export default ContactUsForm;