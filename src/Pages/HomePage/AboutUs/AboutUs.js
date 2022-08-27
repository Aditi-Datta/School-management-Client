import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import Footer from '../../shared/Footer/Footer';
import CampusFacilities from "../CampusFacilities/CampusFacilities";
import FounderSays from "./FounderSays";
import MeetOurTeachers from "./MeetOurTeachers";
import CarouselTeachers from "./CarouselTeachers";
// import Navigation from "../../shared/Navigation/Navigation";

const AboutUs = () => {
    return (
        <div>
            <Navigation></Navigation>
           
            <FounderSays></FounderSays>
            <br/>

            <CarouselTeachers></CarouselTeachers>

            <CampusFacilities></CampusFacilities>
            <br></br>
            <Footer></Footer>

        </div>
    );
};
export default AboutUs;