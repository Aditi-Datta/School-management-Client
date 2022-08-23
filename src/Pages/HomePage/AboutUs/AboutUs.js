import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import Footer from '../../shared/Footer/Footer';
import CampusFacilities from "../CampusFacilities/CampusFacilities";
import FounderSays from "./FounderSays";
// import Navigation from "../../shared/Navigation/Navigation";

const AboutUs = () => {
    return (
        <div>
            <Navigation></Navigation>
           
            <FounderSays></FounderSays>
            <br/>
            <CampusFacilities></CampusFacilities>
            <br></br>
            <Footer></Footer>

        </div>
    );
};
export default AboutUs;