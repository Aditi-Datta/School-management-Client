import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import CampusFacility from "../CampusFacility/CampusFacility";
import Wifi from "../../../../src/images/WifiBlack.jpg";
import lab from "../../../../src/images/e.jpg";
import extraCaricullam from "../../../../src/images/dd.jpg";
import bookOne from "../../../../src/images/i.png";
import cooler from "../../../../src/images/adi.jpg";
import perchantage from "../../../../src/images/index.jpg";


const facilities = [
    {
        name: 'Free Wi-Fi Access',
        description: 'Students are given access to high speed internet all over the campus through wifi.',
        img: Wifi
    },
    {
        name: 'Highly Equipped Labs',
        description: 'There are labs equipped with modern instruments in every relevant department.',
        img: lab
    },
    {
        name: 'Extra Curricular Activities',
        description: 'Students are participate in various extra curricular activies through various clubs.',
        img: extraCaricullam
    },
    {
        name: 'Rich Library',
        description: 'The University has a fully air-conditioned and computerized rich library.',
        img: bookOne
    },
    {
        name: 'AC Class Rooms',
        description: 'Classrooms are air conditioned. so the students can study in comfort.',
        img: cooler
    },
    {
        name: 'Up to 75% Waiver',
        description: 'Meritorious students are rewarded with up to 75% waiver based on several criterias.',
        img: perchantage
    }

]


const CampusFacilities = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Container  >
                <Typography variant="h2" component="div" sx={{ 
                    // color: '#a9a9a9',
                    color: '#1fa4b7',
                m:5, fontWeight: 400 }} style={{ textAlign: 'center' }}  
            //     data-aos="zoom-in"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
                >
                    Campus Facilities
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }} style={{ textAlign: 'center'}} >
                    {
                        facilities.map(facility => <CampusFacility
                            key={facility.name}
                            facility={facility}
                        ></CampusFacility>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};
export default CampusFacilities;