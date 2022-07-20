import React from "react";
import {
    useHistory
} from "react-router-dom";
import Button from '@mui/material/Button';

const HomeClassSeven = () => {

    let history = useHistory();
   
    return (
        <div >

            
            <Button onClick={() => history.push('/SevenMath')}>Math</Button>
            <Button onClick={() => history.push('/SevenEnglish')}>English</Button>
            <Button onClick={() => history.push('/SevenBangla')}>Bangla</Button>
        
        </div>
    );
};
export default HomeClassSeven;







