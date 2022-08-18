import React from "react";
import {
    useHistory
} from "react-router-dom";
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const HomeClassSeven = () => {

    let history = useHistory();
   
    return (
       
        <Box style={{marginTop:'4%'}} >
        <Typography variant="h3" style={{marginLeft:'25%'}}>Class Seven Attendance table</Typography>
          
            <Button onClick={() => history.push('/SevenMath')} style={{width:'20vw',height:'7vw', backgroundColor:'#3c77b2',color:'white',fontSize:'25px', margin:'4%'}}>Math</Button>
            <Button onClick={() => history.push('/SevenEnglish')}  style={{width:'20vw',height:'7vw', backgroundColor:'#1f8aa1',color:'white',fontSize:'25px', margin:'4%'}}>English</Button>
            <Button onClick={() => history.push('/SevenBangla')}  style={{width:'20vw',height:'7vw', backgroundColor:'#951ab9',color:'white',fontSize:'25px', margin:'4%'}}>Bangla</Button>
            <Button onClick={() => history.push('/SevenScience')} style={{width:'20vw',height:'7vw', backgroundColor:'#a1567e',color:'white',fontSize:'25px', margin:'4%'}}>Science</Button>
            <Button onClick={() => history.push('/SevenSociology')} style={{width:'20vw',height:'7vw', backgroundColor:'#ad8214',color:'white',fontSize:'25px', margin:'4%'}}>Sociology</Button>
            <Button onClick={() => history.push('/SevenICT')} style={{width:'20vw',height:'7vw', backgroundColor:'#519255',color:'white',fontSize:'25px', margin:'4%'}}>ICT</Button>
        
        </Box>
       
            
            
        
    );
};
export default HomeClassSeven;







