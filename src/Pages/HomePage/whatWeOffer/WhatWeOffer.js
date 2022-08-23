import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import education from '../../../images/edu.jpg';
import program from '../../../images/program4.png';
import campus from '../../../images/campuss.png';
import { Container } from "react-bootstrap";
const WhatWeOffer = () => {
    return(
        <>
        <Container style={{backgroundColor:'white', padding:'4%', paddingBottom:'4%'}}>
        <div style={{ textAlign: "center", marginBottom:'2%',marginTop:'3%'}}>
        <h2 style={{color: '#1fa4b7'}}>Guaranteed Success</h2>
        <h1 style={{fontSize:50, fontWeight: '600'}}>What We Offer</h1>
        <h4 style={{fontWeight: '400'}}>Teachzy offers students the best of education and entertainment opportunities available in the area.<br/> We are glad to take care of every student and university entrant.</h4>
        </div>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"   
        textAlign= "center" m='2%' style={{paddingLeft:'5%', paddingRight:'5%'}}>
       
        <Grid item xs={4} sm={4} md={4}>
        
        <img src={education}></img>
        <h2>Online Education</h2>
        <p>Teachzy provides online education <br/> services with all learning materials<br/> and lectures available to you.</p>
       
        </Grid>
        
        <Grid item xs={4} sm={4} md={4}>
       
        <img src={program}></img>
        <h2>Programs & Courses</h2>
        <p>We offer a wide range of courses <br/> and programs that encompass lots of<br/> knowledge spheres.</p>
        
        </Grid>
        
        <Grid item xs={4} sm={4} md={4}>
        
        <img src={campus}></img>
        <h2>Campus Events</h2>
        <p>Our campus is the hub to a talented<br/> and diverse student community that<br/> turns opportunities into success.
        </p>
       
        </Grid>
        
        
        
        
        </Grid>
        </Container>
        </>
        


    );
};
export default WhatWeOffer;