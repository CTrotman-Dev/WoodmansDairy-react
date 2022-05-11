import React from "react";
import Avatar from "./Avatar";
import CardDetails from "./CardDetails";

function Card(props) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card row">
                <div className="col-6">
                    <div className="top">
                        <h2 className="name">
                            {props.name} - {props.type}
                        </h2>
                        <Avatar img={props.img} />
                    </div>
                    <div className="bottom">
                        <CardDetails detailInfo={props.desc} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;