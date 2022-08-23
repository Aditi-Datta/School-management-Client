import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerImg from "../../../images/gYJvka-book-cut-out-png.png";
import backgroundImg from "../../../images/bg2.jpg";
// import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import 'react-tsparticles';
import { Typewriter } from 'react-simple-typewriter';


const bannerBackground = {
    // background: `url(${backgroundImg})`,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    backgroundColor: '#1b1b1b',
    // backgroundColor: 'rgba(27, 44, 84 ,0.7)',
    // backgroundBlendMode: 'darken, luminosity',
    width: '100vw',
    height: '70vH'

}
const style = {
    display: 'flex',
    // justifyContent: 'center',
    // alignContent: 'center',
    width: '100%',
    textAlign: "center",
    orientation: "horizontal",
    
};



const Banner = () => {

  
    return (
        <>
      <div className="header-section">
      <Box style={bannerBackground} >
          <Grid container rowSpacing={1} sx={style} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
              <Grid item xs={12} sm={6} md={6} 
              // data-aos="fade-up"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="2000"
              >
                  <Typography variant="h4" component="div" sx={{ color: 'gray', fontWeight: 400 }} style={{ marginTop: '18%', marginLeft: '21%' , fontStyle: 'italic'}}>
                  "Education is the most
                  </Typography>
                  {/*<Typography variant="h5" component="div" sx={{ color: '#1fa4b7', my: 2, mx: '20%', fontWeight: 375 , marginLeft: '40%',fontStyle: 'italic'}}>
                  powerful weapon which you  
    </Typography>*/}
                  <Typography variant="h5" component="div" sx={{ color: '#d0dc8b', my: 2, mx: '20%', fontWeight: 400 , marginLeft: '39%',fontStyle: 'italic'}}>
                  can use to change the WORLD_ "
                  </Typography>

                  <span style={{ color: '#1fa4b7', fontWeight: 500,fontStyle: 'italic',  fontSize: 28 ,marginLeft: '30%'}}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={['Welcome from THE  Leading Light!!', 'Be DIFFERENT_!! Be DARING_!!',
                    // ' Be IMPRACTICAL_!!', 
                    'Do the Best You CAN Definitely_!!!']}
                    loop={15}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}  
                  />
                </span>

                 
              </Grid>
              {/*<Grid item xs={12} sm={6} md={6} 
              // data-aos="fade-up"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="4000"
              >
                  <img
                      style={{ position: 'relative', height: '65%', borderRadius: '15px 50px 30px 5px', marginTop: '3%', marginRight: '10%', width: '85%' }}
                      src={bannerImg} alt="book is not found"></img>
    </Grid>*/}

          </Grid>
      </Box >
  </div >
        </>
       
    );
};
export default Banner;