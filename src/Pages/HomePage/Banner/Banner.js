import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Typewriter } from 'react-simple-typewriter';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const bannerBackground = {
    backgroundColor: '#1b1b1b',
    width: '100vw',
    height: '70vH'
}
const style = {
    display: 'flex',
    width: '100%',
    textAlign: "center",
    // orientation: "horizontal",
    textAlign:'center',
    
};



const Banner = () => {

  
    return (
        <>
      <div className="header-section">
      <Box style={bannerBackground} >
          <Grid container rowSpacing={1} sx={style} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
              <Grid item xs={12} sm={8} md={8} >
                  <Typography variant="h4" component="div" sx={{ color: 'gray', fontWeight: 400 }} style={{ marginTop: '18%', fontStyle: 'italic'}}>
                  "Education is the most
                  </Typography>
                  
                  <Typography variant="h5" component="div" sx={{ color: '#d0dc8b', my: 2, mx: '20%', fontWeight: 400 , fontStyle: 'italic'}}>
                  can use to change the 
                  </Typography>
                  <Typography variant="h5" component="div" sx={{ color: '#d0dc8b', my: 2, mx: '20%', fontWeight: 400 , fontStyle: 'italic'}}>
                  WORLD_ "
                  </Typography>

                  <span style={{ color: '#1fa4b7', fontWeight: 500,fontStyle: 'italic',  fontSize: 28 }}>
                  <Typewriter
                    words={['Welcome from THE  Leading Light!!', 'Be DIFFERENT_!! Be DARING_!!',
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
             

          </Grid>
      </Box >
  </div >
        </>
       
    );
};
export default Banner;