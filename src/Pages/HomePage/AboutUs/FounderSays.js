import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import founderImg from "../../../images/elonmask.jpg";
import coFounderImg from "../../../images/w.jpg";
import principleImg from "../../../images/principle.jpg";
const FounderSays =() => {

    const backgroundDesign = {
        backgroundColor:'#e8e9ee',
        borderRadius:'15px ',
        paddingBottom:'5%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:'5%',
        
    }

  return (
    <Box sx={{ flexGrow: 1}} style={backgroundDesign}>
  
    <Typography variant='h4' style={{ display:'flex', justifyContent:"flex-end", paddingRight:'13%', paddingTop:'5%' }}>Message from founder & Chairman</Typography>
    <Divider style={{height:'2%'}}></Divider>
    <Grid container direction="row"
    justifyContent="center"
    alignItems="center"   spacing={{ xs: 3, md: 0}} columns={{ xs: 4, sm: 8, md: 12 }}>
    
    <Grid  component="div" item  xs={4} sm={6} md={4}  
        >
        <img
        style={{ position: 'relative', height: '55%', borderRadius: '15px 50px 30px 5px', marginTop: '3%', marginRight: '10%', width: '85%', padding:'5px 0 0 55px' }}
        src={founderImg} alt="book is not found"></img>
        </Grid>
                <Grid container item  xs={4} sm={6} md={8}  style={{ textAlign: 'center', padding:'5%'}} >  
                <p style={{paddingTop:'5%',textAlign:'left'}}>Welcome to RTM Al-Kabir Technical University (RTM-AKTU). I, together with my fellow Board of Trustee (BoT) members of the university are aware of, and committed to, our responsibilities and duties as Board members to do whatever is in the best interest of the University.
                I am honoured to serve as the founder Chairman of the RTM Al Kabir Technical University Board of Trustees. I am pleased to lead RTM-AKTU’s Board of Trustees during a historic time of the university, and excited to see where we go next.</p>
                </Grid>
        </Grid>


        <Typography variant='h4' style={{ display:'flex', justifyContent:"flex-start", paddingLeft:'13%', paddingTop:'5%' }}>Message from Co-founder</Typography>
        <Divider style={{height:'2%'}}></Divider>
        <Grid container direction="row"
        justifyContent="center"
        alignItems="center"   spacing={{ xs: 3, md: 0}} columns={{ xs: 4, sm: 8, md: 12 }}>
    
   
                <Grid container item  xs={4} sm={6} md={8}  style={{ textAlign: 'center', padding:'5%'}} >  
                <p style={{paddingTop:'5%',textAlign:'left'}}>Welcome to RTM Al-Kabir Technical University (RTM-AKTU). I, together with my fellow Board of Trustee (BoT) members of the university are aware of, and committed to, our responsibilities and duties as Board members to do whatever is in the best interest of the University.
                I am honoured to serve as the founder Chairman of the RTM Al Kabir Technical University Board of Trustees. I am pleased to lead RTM-AKTU’s Board of Trustees during a historic time of the university, and excited to see where we go next.</p>
                </Grid>


                <Grid  component="div" item  xs={4} sm={6} md={4}  //data-aos="fade-up"
                >
                <img
                style={{ position: 'relative', height: '55%', borderRadius: '50px 15px 30px 50px', marginTop: '3%', marginRight: '10%', width: '85%', padding:'5px 0 0 55px' }}
                src={coFounderImg} alt="book is not found"></img>
                </Grid>
        </Grid>




        <Typography variant='h4' style={{ display:'flex', justifyContent:"flex-end", paddingRight:'13%', paddingTop:'5%' }}>Message from Princple</Typography>
    <Divider style={{height:'2%'}}></Divider>
    <Grid container direction="row"
    justifyContent="center"
    alignItems="center"   spacing={{ xs: 3, md: 0}} columns={{ xs: 4, sm: 8, md: 12 }}>
    
    <Grid  component="div" item  xs={4} sm={6} md={4}  //data-aos="fade-up"
        >
        <img
        style={{ position: 'relative', height: '55%', borderRadius: '15px 50px 30px 5px', marginTop: '3%', marginRight: '10%', width: '85%', padding:'5px 0 0 55px' }}
        src={principleImg} alt="book is not found"></img>
        </Grid>
                <Grid container item  xs={4} sm={6} md={8}  style={{ textAlign: 'center', padding:'5%'}} >  
                <p style={{paddingTop:'5%',textAlign:'left'}}>Welcome to RTM Al-Kabir Technical University (RTM-AKTU). I, together with my fellow Board of Trustee (BoT) members of the university are aware of, and committed to, our responsibilities and duties as Board members to do whatever is in the best interest of the University.
                I am honoured to serve as the founder Chairman of the RTM Al Kabir Technical University Board of Trustees. I am pleased to lead RTM-AKTU’s Board of Trustees during a historic time of the university, and excited to see where we go next.</p>
                </Grid>
        </Grid>

               
        </Box>
  );
};
export default  FounderSays;