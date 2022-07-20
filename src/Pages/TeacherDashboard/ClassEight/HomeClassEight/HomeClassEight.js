import React from "react";
import {
    useHistory
} from "react-router-dom";
import Button from '@mui/material/Button';
import { Container } from "@mui/system";

const HomeClassEight = () => {

    let history = useHistory();
   
    return (
        <Container style={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' }}>
            <div >
            <div>
            <h2 >Hello from Class Eight</h2>
            </div>
           <div>
           <h3>Class Eight Attendance Table here</h3>
           </div>
            <div>
            <Button onClick={() => history.push('/SevenMath')}>Math</Button>
            <Button onClick={() => history.push('/SevenEnglish')}>English</Button>
            <Button onClick={() => history.push('/SevenBangla')}>Bangla</Button>
            </div>
            </div>
            
            
        
        </Container>
    );
};
export default HomeClassEight;







