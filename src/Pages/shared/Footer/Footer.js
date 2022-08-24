import { Box, Container, Divider, Grid, List, Typography } from '@mui/material';
import React from 'react'

// import DeleteIcon from '@mui/icons-material/Delete';
// import FacebookIcon from '@mui/icons-material/Fackbook';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import RoomIcon from '@material-ui/icons/Room';
import Link from '@mui/material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Footer = () => {

    const footerStyle = {

        backgroundColor: '#1b1b1b',
        color: 'white',
        // marginTop: '60px',
        height:'100%',
        width: '100%',
        bottom:0,
        paddingTop:'5%',
        paddingLeft:'10%',
        paddingRight:'10%',
        textAlign: 'left',
        // borderTop: 'solid 1px'
       
    };

    return (

        <>
       
        
        
       
       <Box style={footerStyle} sx={{ flexGrow: 1 }}>

       <Grid container alignItems="center" justifyContent="flex-start"  direction="row" spacing={{ xs: 2, md: 3 }} >
           <Grid item xs={12} sm={12} md={4} style={{  paddingLeft:'5%' }}>

               <Typography variant="h6" component="div" style={{ paddingBottom:'5%', fontWeight:'bold',color:'#1fa4b7'}} >
                   Contact Us
               </Typography>
               
               <Box style={{ paddingBottom:'2%'}}>
               <p>We support programs that </p>
               <p>create advancement </p>
               <p>opportunities for people.</p>

               </Box>
               
               <Box >
                   <Link href="#demoIcon" color="inherit">
                       <FacebookIcon
                           style={{
                               color: 'white', width: '20px', height: '22px', margin: '8px', borderRadius: 3
                           }}
                       />
                   </Link>
                   <Link href="#demoIcon" color="inherit">
                       <InstagramIcon
                           style={{ color: ' white ', width: '20px', height: '22px', margin: '8px', borderRadius: 3 }}
                       />
                   </Link>
                   <Link href="#demoIcon" color="inherit">
                       <TwitterIcon
                           style={{ color: 'white ', width: '20px', height: '22px', margin: '8px', borderRadius: 3 }}
                       />
                   </Link>
                   <Link href="#demoIcon" color="inherit">
                       <VoiceChatIcon
                           style={{ color: 'white', width: '20px', height: '22px', margin: '8px', borderRadius: 3 }}
                       />
                   </Link>
               </Box>

           </Grid>

           <Grid item xs={12} sm={12} md={4} >
               <Typography variant="h6" component="div"  style={{ paddingBottom:'5%',fontWeight:'bold',color:'#1fa4b7'}} >
                  Useful Links
               </Typography>
              
               <Link href="/home" color="inherit" style={{ textDecoration: 'none', fontWeight: 425, }}>
                   Home
               </Link><br></br>
               <Link href="/aboutus" color="inherit" style={{ textDecoration: 'none',fontWeight: 425 }}>
                   About Us
               </Link><br></br>
               <Link href="/contactUs" color="inherit" style={{ textDecoration: 'none',fontWeight: 425 , marginBottom:'4%'}}>
                   Contact Us
               </Link><br></br>
               <Link href="/dashboard" color="inherit" style={{ textDecoration: 'none',fontWeight: 425 }}>
                   Dashboard
               </Link><br></br>
               <Link href="/login" color="inherit" style={{ textDecoration: 'none',fontWeight: 425 }}>
                   Login
               </Link><br></br>
           </Grid>

           <Grid item xs={12} sm={12} md={4} >
               <Typography variant="h6" component="div"  style={{paddingBottom:'5%',fontWeight:'bold',color:'#1fa4b7'}} >
                  Details
               </Typography>
                     <p >  PO Box 16122 Collins Street West</p>
                     <p>Victoria 8007 Bangladesh</p>
                     
                     <p >   +91 458 654 528a</p>
                     <p  > gostudy@gmail.com</p> 

          </Grid>
 
           </Grid>

      
         
       <Divider sx={{ backgroundColor: 'gray', width: "90%" }} style={{ marginBottom: '4%', marginTop:'2%' }}></Divider>

      

           
            <Typography style={{  paddingBottom: '5%',paddingTop:'1%',textAlign:'center' }}>© Copyright 2022 Goesstudy All rights reserved by GoesStudy. </Typography>

           
       


   </Box >
       
        </>

        



    );
};

export default Footer;
