import React from "react";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import CampusFacilities from "../CampusFacilities/CampusFacilities";
import ContactUs from "../ContactUs/ContactUs";
import ContactUsForm from "../ContactUs/ContactUsForm";

import FaqQuestions from "../FaqQuestions/FaqQuestions";
import WhatWeOffer from "../whatWeOffer/WhatWeOffer";
// import MainBanner from "../MainBanner/MainBanner";



const Home = () => {
    const background= {
        backgroundColor:'#1b1b1b'
    }
    return (
        <div style={background}>
            <Navigation></Navigation>
           
           
           <Banner></Banner>
            

            <WhatWeOffer></WhatWeOffer><br/>

            <FaqQuestions></FaqQuestions>
            <br></br>

            <CampusFacilities></CampusFacilities>
            <br></br><br></br>

            <ContactUsForm></ContactUsForm>
            
           
            <Footer></Footer>
        </div>
    );
};
export default Home;