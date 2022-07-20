import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerImg from "../../../images/gYJvka-book-cut-out-png.png";
import backgroundImg from "../../../images/bg2.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import 'react-tsparticles';
import { Typewriter } from 'react-simple-typewriter';


const bannerBackground = {
    background: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(27, 44, 84 ,0.7)',
    backgroundBlendMode: 'darken, luminosity',
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

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
   

    return (
        <>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 140,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#f53f3f",
            },
            links: {
              color: "#f2ecec",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 2, max: 6 },
            },
          },
          detectRetina: true,
        }}
      />




      <div className="header-section">
      <Box style={bannerBackground} >
          <Grid container rowSpacing={1} sx={style} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
              <Grid item xs={12} sm={6} md={6} 
              // data-aos="fade-up"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="2000"
              >
                  <Typography variant="h4" component="div" sx={{ color: 'orange', fontWeight: 400 }} style={{ marginTop: '18%', marginLeft: '21%' , fontStyle: 'italic'}}>
                  "Education is the most
                  </Typography>
                  <Typography variant="h5" component="div" sx={{ color: 'pink', my: 2, mx: '20%', fontWeight: 375 , marginLeft: '40%',fontStyle: 'italic'}}>
                  powerful weapon which you  
                  </Typography>
                  <Typography variant="h5" component="div" sx={{ color: 'orange', my: 2, mx: '20%', fontWeight: 400 , marginLeft: '39%',fontStyle: 'italic'}}>
                  can use to change the WORLD_ "
                  </Typography>

                  <span style={{ color: 'yellow', fontWeight: 500,fontStyle: 'italic',  fontSize: 28 ,marginLeft: '30%'}}>
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
              <Grid item xs={12} sm={6} md={6} 
              // data-aos="fade-up"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="4000"
              >
                  <img
                      style={{ position: 'relative', height: '65%', borderRadius: '15px 50px 30px 5px', marginTop: '3%', marginRight: '10%', width: '85%' }}
                      src={bannerImg} alt="book is not found"></img>
              </Grid>

          </Grid>
      </Box >
  </div >
        </>
       
    );
};
export default Banner;