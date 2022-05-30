import React from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/CarouselComponent";
import QuickLinks from "../components/QuickLinks";
import Card from "../components/Card";

import productData from "../productData";

const Home = () => {
    return (
        <div className="">

            <div className="row">
                <div className="col-md-6 home-cta">
                    <h1>Get your milk delivered in Glass today!</h1>
                    <p>
                        Contact us today to reduce your carbon footprint.
                    </p>
                    <Link className="btn btn-lg btn-danger" to={"/produce"}>Click Here</Link>
                </div>
                <div className="col-md-6">
                    <CarouselComponent />
                </div>
            </div>
            <QuickLinks />

        </div>
    );
}

export default Home;