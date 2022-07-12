import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerImg from "../../../images/gYJvka-book-cut-out-png.png";
import backgroundImg from "../../../images/bg2.jpg";



const bannerBackground = {
    background: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(27, 44, 84 ,0.7)',
    backgroundBlendMode: 'darken, luminosity'
    // width: '100vw',
    // height: '100vh'

}
const style = {
    display: 'flex',
    // justifyContent: 'center',
    // alignContent: 'center',
    width: '100%',
    textAlign: "center",
    orientation: "horizontal"
};



const Banner = () => {
    return (
        <div className="header-section">
            <Box style={bannerBackground} >
                <Grid container rowSpacing={1} sx={style} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h3" component="div" sx={{ color: 'orange', fontWeight: 500 }} style={{ marginTop: '25%' }}>
                            Welcome to the
                        </Typography>
                        <Typography variant="h3" component="div" sx={{ color: 'pink', my: 2, mx: '20%', fontWeight: 500 }}>
                            Leading Light
                        </Typography>
                        <Typography variant="h3" component="div" sx={{ color: 'yellow', fontWeight: 500 }}>
                            School and College
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img
                            style={{ position: 'relative', height: '80%', borderRadius: '15px 50px 30px 5px', marginTop: '2%', marginRight: '10%', width: '90%' }}
                            src={bannerImg} alt="book is not found"></img>
                    </Grid>

                </Grid>
            </Box >
        </div >
    );
};
export default Banner;