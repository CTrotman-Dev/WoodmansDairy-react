import React from "react";

import Card from "../components/Card";

import productData from "../productData";

const Produce = () => {
    return (
        <div className="row">
            {productData.map(x =>
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

export default Produce;