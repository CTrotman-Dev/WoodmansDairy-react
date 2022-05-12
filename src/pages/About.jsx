import React from "react";

import MyMap from "../components/MyMap";

const About = () => {
    return (
        <div className="row">
            <div className="about-content col-md-6">
                <h1>
                    About us
                </h1>
                <h3>
                    Delivering milk in Cardiff since 1983. Support doorstep deliveries and support your community.
                </h3>
                <h4>
                    At Woodman’s, we supply and deliver a range of dairy products direct to your ho-
                    me including, but not limited to, the following:
                </h4>
                <ul>
                    <li>
                        All grades of milk,
                    </li>
                    <li>
                        Potatoes,
                    </li>
                    <li>
                        Fresh farm eggs,
                    </li>
                    <li>
                        Cream,
                    </li>
                    <li>
                        Fruit juices,
                    </li>
                    <li>
                        Yogurts,
                    </li>
                    <li>
                        Veg boxes.
                    </li>
                </ul>
                <h3>
                    <a href="/produce">See our produce page for more information.</a>
                </h3>
            </div>
            <div className="col-md-6">
                <MyMap />
            </div>
        </div>
    );
}

export default About;