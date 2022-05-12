import React from "react";

const QuickLinkCard = (props) => {
    return (
        <div className="col-md-4">
            <div className="quick-link ">

                <a href={props.link}>
                    <img src={props.imgSrc} />
                    <h1>
                        {props.text}
                    </h1>
                </a>

            </div>
        </div>
    );
}

export default QuickLinkCard;