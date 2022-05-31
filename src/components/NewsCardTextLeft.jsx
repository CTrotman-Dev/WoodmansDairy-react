import React from "react";

const NewsCardTextLeft = (props) => {

    return (

        <div className="news-card row">
            <div className="col-md-6">
                <h2 className="news-title">
                    {props.title}
                </h2>
                <p>
                    {props.text}
                </p>
            </div>
            <div className="col-md-6">
                <img src={props.imgSrc} alt={"image of " + props.title} />
            </div>
        </div>

    );
}

export default NewsCardTextLeft;