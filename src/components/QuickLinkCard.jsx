import React from "react";
import { Link } from "react-router-dom";

const QuickLinkCard = (props) => {
    return (
        <div className="col-md-4">
            <div className="quick-link ">
                <Link to={props.link}>
                    <img src={props.imgSrc} />
                    <h1>
                        {props.text}
                    </h1>
                </Link>

            </div>
        </div>
    );
}

export default QuickLinkCard;