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
                    <h1>Reduce your carbon footprint!</h1>
                    <p>
                        We supply a range of dairy and non dairy alternatives. Visit our 
                        <Link to={"/produce"}> produce </Link>
                        section to see our full produce range.
                    </p>
                    <p>
                        Contact us today to get your milk delivered in Glass!
                    </p>
                    <Link className="btn btn-lg btn-danger" to={"/produce"}>Contact Us</Link>
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