import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000}>
            <div>
                <Link className="carousel-link" to={"/produce"}>
                    <img src="https://c7.alamy.com/zooms/3/4ff98c7070184115adba7c5f4380cf96/m108cj.jpg" />
                    <p className="legend">View our produce</p>
                </Link>
            </div>
            <div>
                <Link className="carousel-link" to={"/produce"}>
                    <img src="https://c7.alamy.com/zooms/3/31f70256734a41d58d7b4ae88526562c/m1089d.jpg" />
                    <p className="legend">View our produce</p>
                </Link>
            </div>
            <div>
                <Link className="carousel-link" to={"/produce"}>
                    <img src="https://c7.alamy.com/zooms/3/96e5e921a88e48e582299c1a691b0a32/m1089r.jpg" />
                    <p className="legend">View our produce</p>
                </Link>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;