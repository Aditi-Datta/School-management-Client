import React from "react";
import {
    useHistory
} from "react-router-dom";
import Button from '@mui/material/Button';
import { Box, Typography } from "@mui/material";
import { Container } from "react-bootstrap";

const HomeClassSix = () => {

    let history = useHistory();
   
    return (
        <Box style={{marginTop:'4%'}} >

        <Typography variant="h3" style={{marginLeft:'25%'}}>Class Six Attendance table</Typography>
       
            
            <Button onClick={() => history.push('/SixMath')} style={{width:'20vw',height:'7vw', backgroundColor:'#3c77b2',color:'white',fontSize:'25px', margin:'4%'}}>Math</Button>
            <Button onClick={() => history.push('/SixEnglish')}  style={{width:'20vw',height:'7vw', backgroundColor:'#1f8aa1',color:'white',fontSize:'25px', margin:'4%'}}>English</Button>
            <Button onClick={() => history.push('/SixBangla')}  style={{width:'20vw',height:'7vw', backgroundColor:'#951ab9',color:'white',fontSize:'25px', margin:'4%'}}>Bangla</Button>
            <Button onClick={() => history.push('/SixScience')} style={{width:'20vw',height:'7vw', backgroundColor:'#a1567e',color:'white',fontSize:'25px', margin:'4%'}}>Science</Button>
            <Button onClick={() => history.push('/SixSociology')} style={{width:'20vw',height:'7vw', backgroundColor:'#ad8214',color:'white',fontSize:'25px', margin:'4%'}}>Sociology</Button>
            <Button onClick={() => history.push('/SixICT')} style={{width:'20vw',height:'7vw', backgroundColor:'#519255',color:'white',fontSize:'25px', margin:'4%'}}>ICT</Button>
        
        </Box>
    );
};
export default HomeClassSix;







