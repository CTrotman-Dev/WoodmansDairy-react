import React from "react";

import CarouselComponent from "../components/CarouselComponent";
import QuickLinks from "../components/QuickLinks";
import Card from "../components/Card";

import productData from "../productData";

const Home = () => {
    return (
        <div className="">
            <CarouselComponent />   
            <QuickLinks />         
        </div>
    );
}

export default Home;