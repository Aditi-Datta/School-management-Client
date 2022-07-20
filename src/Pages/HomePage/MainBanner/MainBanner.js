import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import imgOne from '../../../images/d4.jpg';
import imgTwo from '../../../images/banner12.jpg';
// import imgThree from '../../../images/b4.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import 'react-tsparticles';
const MainBanner = () => {

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
    
   

    // const bannerBackground = {
    //     backgroundImage: `url(${imgOne})`,
    //     backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    // height: "100vh",
    // // height: '90vh',
    // }

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
              value: "#fdd2cc",
            },
            links: {
              color: "#f2ecec",
              distance: 150,
              enable: true,
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
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />




        
            <Carousel>
                <Carousel.Item>
                
                <img
                        className="d-block w-100"
                        src={imgOne}
                        alt="First slide"
                    />
                    
                 
                   
                    <Carousel.Caption>
                    <Grid marginBottom="5%">
                    <Grid container justifyContent="flex-left" color='#713c08'  marginLeft='2%'>
                    <h1>"Education is the most  </h1><br></br>
                    </Grid>

                    <Grid container justifyContent="flex-left" color='#171161'  marginLeft='2%'>
                    <h2>powerful weapon which you can </h2><br></br>
                   
                    </Grid>
                    <Grid container justifyContent="flex-left" color='#171161'  marginLeft='2%'>
                    <h1>use to change the world"</h1><br></br>
                   
                    </Grid>
                    </Grid>             
                        <p>Welcome to the Leading Light hight School.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <Grid marginBottom="6%">
                    <Grid container justifyContent="flex-left" color='#171161'  marginLeft='30%' >
                    <h1>"Educational success should </h1>
                    </Grid>

                    <Grid container justifyContent="flex-left" color='#171161'  marginLeft='32%'marginBottom='3%'>
                    <h2>be measured by how strong  </h2>
                   
                    </Grid>
                   
                    <Grid container justifyContent="flex-left" color='#171161'  marginLeft='32%'>
                    <h1>your desire is to keep learning"</h1>
                   
                    </Grid>
                    </Grid>     
                    </Carousel.Caption>
    </Carousel.Item>
                
                
            </Carousel>
        </>


    )
}

export default MainBanner;