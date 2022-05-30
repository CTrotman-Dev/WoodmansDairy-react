import React from "react";

//import Card from "../components/Card";
import ProduceGrid from "../components/ProduceGrid";

import productData from "../productData";

const Produce = () => {
    const glassArray = [];
    const orgGlassArray = [];
    const polyArray = [];
    const orgPolyArray = [];
    const perGalArray = [];
    const creamArray = [];
    const alternateArray = [];
    const juiceArray = [];
    const breadArray = [];

    productData.map(x => {
        switch (x.type) {
            case "Glass":
                glassArray.push(x);
                break;
            case "Glass Organic":
                orgGlassArray.push(x);
                break;
            case "Poly":
                polyArray.push(x);
                break;
            case "Organic Poly":
                orgPolyArray.push(x);
                break;
            case "24 Pint PerGal (Milk Pack)":
                perGalArray.push(x);
                break;
            case "Cream":
                creamArray.push(x);
                break;
            case "Alternate Milk":
                alternateArray.push(x);
                break;
            case "Juice":
                juiceArray.push(x);
                break;
            case "Bread":
                breadArray.push(x);
                break;

            default:

        }
    });
    return (
        <div>
            <ProduceGrid key="glassArray" title="Glass" data={glassArray} />
            <ProduceGrid key="glassOrgArray" title="Glass Organic" data={orgGlassArray} />
            <ProduceGrid key="polyArray" title="Poly" data={polyArray} />
            <ProduceGrid key="orgPolyArray" title="Organic Poly" data={orgPolyArray} />
            <ProduceGrid key="perGalArray" title="Per Gal" data={perGalArray} />
            <ProduceGrid key="creamArray" title="Cream" data={creamArray} />
            <ProduceGrid key="alternateArray" title="Alternate Milk" data={alternateArray} />
            <ProduceGrid key="juiceArray" title="Juice" data={juiceArray} />
            <ProduceGrid key="breadArray" title="Bread" data={breadArray} />
        </div>
    );
}

export default Produce;