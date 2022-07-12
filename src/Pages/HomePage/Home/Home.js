import React from "react";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import CampusFacilities from "../CampusFacilities/CampusFacilities";

import FaqQuestions from "../FaqQuestions/FaqQuestions";
import HolidaysCalander from "../HolidaysCalander/HolidaysCalander";
import MainBanner from "../MainBanner/MainBanner";


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <MainBanner></MainBanner>
            <br></br>
            <FaqQuestions></FaqQuestions>
            <br></br>

            <CampusFacilities></CampusFacilities>
            <br></br>
            <Footer></Footer>
        </div>
    );
};
export default Home;