import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import MeetOurTeachers from './MeetOurTeachers';
const CarouselTeachers = () => {

    
    return (
      <>
            <Carousel>
            
                <Carousel.Item> 
                 <MeetOurTeachers></MeetOurTeachers>
                </Carousel.Item>

                <Carousel.Item>
                <MeetOurTeachers></MeetOurTeachers>
                </Carousel.Item>

            </Carousel>
        </>


    )
}

export default CarouselTeachers;