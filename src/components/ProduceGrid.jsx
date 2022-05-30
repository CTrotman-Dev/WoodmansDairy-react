import React from "react";
import Card from "../components/Card";

const ProduceGrid = (props) => {

    return (
        <div className="row">
        <h1>
            {props.title}
        </h1>
            {props.data.map(x =>
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