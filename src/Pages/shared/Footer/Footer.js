import { Box, Container, Divider, Grid, Typography } from '@mui/material';
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



const Footer = () => {

    const footerStyle = {

        backgroundColor: '#110941',
        color: 'white',
        marginTop: '60px',
        width: '100%',

        bottom: 0
    };

    return (

        <Box style={footerStyle} sx={{ flexGrow: 1 }}>

            <Grid container alignItems="center" justifyContent="center" direction="row" spacing={{ xs: 2, md: 3 }} >
                <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' }}>

                    <Typography variant="h5" component="div"  >
                        Contact Us
                    </Typography>
                    <Divider sx={{ backgroundColor: 'white', width: "195px" }} style={{ margin: '0 auto' }}></Divider>

                    <Box >
                        <Link href="#demoIcon" color="inherit">
                            <FacebookIcon
                                style={{
                                    color: '#a233c8', width: '50px', height: '52px', margin: '8px', borderRadius: 3
                                }}
                            />
                        </Link>
                        <Link href="#demoIcon" color="inherit">
                            <InstagramIcon
                                style={{ color: ' #a233c8 ', width: '50px', height: '52px', margin: '8px', borderRadius: 3 }}
                            />
                        </Link>
                        <Link href="#demoIcon" color="inherit">
                            <TwitterIcon
                                style={{ color: ' #a233c8 ', width: '50px', height: '52px', margin: '8px', borderRadius: 3 }}
                            />
                        </Link>
                        <Link href="#demoIcon" color="inherit">
                            <VoiceChatIcon
                                style={{ color: ' #a233c8 ', width: '50px', height: '52px', margin: '8px', borderRadius: 3 }}
                            />
                        </Link>
                    </Box>

                </Grid>

                <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' }}>
                    <Typography variant="h5" component="div"  >
                        Quick Links
                    </Typography>
                    <Divider sx={{ backgroundColor: 'white', width: "190px" }} style={{ margin: '0 auto' }}></Divider>

                    <Link href="/home" color="inherit" style={{ textDecoration: 'none', fontWeight: 425 }}>
                        Home
                    </Link><br></br>
                    <Link href="/aboutus" color="inherit" style={{ textDecoration: 'none', fontWeight: 425 }}>
                        About Us
                    </Link><br></br>
                    <Link href="/contactUs" color="inherit" style={{ textDecoration: 'none', fontWeight: 425 }}>
                        Contact Us
                    </Link><br></br>
                </Grid>

                <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' }}>
                    <Typography variant="h5" component="div" >
                        Terms
                    </Typography>
                    <Divider sx={{ backgroundColor: 'white', width: "180px" }} style={{ margin: '0 auto' }}></Divider>
                </Grid>

            </Grid>

            <Divider sx={{ backgroundColor: 'white', width: "90%" }} style={{ margin: '2% 4%' }}></Divider>
            <Typography style={{ textAlign: 'center', paddingBottom: '25px' }}>Copyright © 2022 All right reserved by sm system</Typography>



        </Box >



    );
};

export default Footer;
