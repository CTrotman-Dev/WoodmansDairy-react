import React from "react";

function DictionaryItem(props) {
    return (
        <div className="term">
            <dt>
            <h1>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.img}
                </span>
                </h1>
                <h1><span>{props.title}</span></h1>
            </dt>
            <dd>
            <p>
                {props.text}
            </p>

            </dd>
        </div>
    );
}

export default DictionaryItem;