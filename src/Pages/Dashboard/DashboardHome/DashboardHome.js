import React from "react";
import CarouselStudentSuccess from "../../HomePage/StudentSuccess/CarouselStudentSuccess";
import WhatWeOffer from "../../HomePage/whatWeOffer/WhatWeOffer";

const DashboardHome = () => {


    const dashboardHomeStyle = {
        marginLeft:'-90px',
        width:'100vw'
    }

    return (
        <div style={dashboardHomeStyle}>

            <CarouselStudentSuccess></CarouselStudentSuccess>
           
        </div>
    );
};
export default DashboardHome;