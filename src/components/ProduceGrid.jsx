import React, { useState } from "react";
import Card from "../components/Card";

const ProduceGrid = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    function handleClick() {
        console.log("click");
        setIsVisible(!isVisible);
    }
    return (
        <div className="row">
            <h1 className="produce-heading" onClick={handleClick}>
                {props.title} ⯆
            </h1>
            {isVisible && props.data.map(x =>
                <Card key={x.id}
                    name={x.name}
                    img={x.img}
                    desc={x.desc}
                    type={x.type}
                />
            )}
        </div>
    );
}

export default ProduceGrid;