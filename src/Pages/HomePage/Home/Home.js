import React from "react";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import CampusFacilities from "../CampusFacilities/CampusFacilities";

import FaqQuestions from "../FaqQuestions/FaqQuestions";
import MainBanner from "../MainBanner/MainBanner";



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
           
           
           <Banner></Banner>
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