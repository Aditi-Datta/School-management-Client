import React from "react";
import Navigation from "../../../shared/Navigation/Navigation";
import Footer from '../../../shared/Footer/Footer';
import CampusFacilities from "../../CampusFacilities/CampusFacilities";
// import Navigation from "../../shared/Navigation/Navigation";

const AboutUs = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>Here is About Us Section</h2>
            <CampusFacilities></CampusFacilities>
            <br></br>
            <Footer></Footer>

        </div>
    );
};
export default AboutUs;