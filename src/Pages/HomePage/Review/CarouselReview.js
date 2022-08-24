import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import imgOne from '../../../images/d4.jpg';
import imgTwo from '../../../images/banner12.jpg';
// import imgThree from '../../../images/b4.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


import ReviewSlideOne from './ReviewSlideOne';
import ReviewSlideTwo from './ReviewSlideTwo';
const CarouselReview = () => {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
      <>
            <Carousel>
                <Carousel.Item>
                
                  <ReviewSlideOne></ReviewSlideOne>

                </Carousel.Item>
                <Carousel.Item>
                  <ReviewSlideTwo></ReviewSlideTwo>
    </Carousel.Item>
                
                
            </Carousel>
        </>


    )
}

export default CarouselReview;