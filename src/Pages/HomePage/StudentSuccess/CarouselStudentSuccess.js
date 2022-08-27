import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import imgOne from '../../../images/d4.jpg';
import imgTwo from '../../../images/banner12.jpg';
// import imgThree from '../../../images/b4.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// import ReviewSlideOne from './ReviewSlideOne';
// import ReviewSlideTwo from './ReviewSlideTwo';
import SlideOneStudentSuccess from './SlideOneStudentSuccess';
import SlideTwoStudentSuccess from './SlideTwoStudentSuccess';
const CarouselStudentSuccess = () => {

    
    return (
      <>
            <Carousel>
            
                <Carousel.Item> 
                  <SlideOneStudentSuccess></SlideOneStudentSuccess>
                </Carousel.Item>

                <Carousel.Item>
                <SlideTwoStudentSuccess></SlideTwoStudentSuccess>
                </Carousel.Item>

            </Carousel>
        </>


    )
}

export default CarouselStudentSuccess;