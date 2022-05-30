import React, { useState } from "react";

//import Card from "../components/Card";
import ProduceGrid from "../components/ProduceGrid";

import { Dropdown } from "react-bootstrap";
import productData from "../productData";

const Produce = () => {
    //sorting by bottle type
    const [glassVis, setGlassVis] = useState(true);
    const [orgGlassVis, setOrgGlassVis] = useState(true);
    const [polyVis, setPolyVis] = useState(true);
    const [orgPolyVis, setOrgPolyVis] = useState(true);
    const [perGalVis, setPerGalVis] = useState(true);
    const [creamVis, setCreamVis] = useState(true);
    const [altVis, setAltVis] = useState(true);
    const [juiceVis, setJuiceVis] = useState(true);
    const [breadVis, setBreadVis] = useState(true);
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


    //sorting by milk type
    const [semiVis, setSemiVis] = useState(false);
    const [pasVis, setPasVis] = useState(false);
    const [skimVis, setSkimVis] = useState(false);
    const [otherVis, setOtherVis] = useState(false);
    const semiArray = [];
    const pasArray = [];
    const skimArray = [];
    const otherArray = [];
    productData.map(x => {
        if (x.name.includes("Semi Skimmed")) {
            semiArray.push(x);
        } else if (x.name.includes("Skimmed")) {
            skimArray.push(x);
        } else if (x.name.includes("Past")) {
            pasArray.push(x);
        } else {
            otherArray.push(x);
        }

    });

    //event handling
    function handleMilk(type) {
        console.log(type);
        switch (type) {
            case "All":
                setSemiVis(true);
                setPasVis(true);
                setSkimVis(true);
                setOtherVis(true);

                setGlassVis(false);
                setOrgGlassVis(false);
                setPolyVis(false);
                setOrgPolyVis(false);
                setPerGalVis(false);
                setAltVis(false);
                setCreamVis(false);
                setJuiceVis(false);
                setBreadVis(false);
                break;
            case "Semi":
                setSemiVis(true);
                setPasVis(false);
                setSkimVis(false);
                setOtherVis(false);

                setGlassVis(false);
                setOrgGlassVis(false);
                setPolyVis(false);
                setOrgPolyVis(false);
                setPerGalVis(false);
                setAltVis(false);
                setCreamVis(false);
                setJuiceVis(false);
                setBreadVis(false);
                break;
            case "Pas":
                setSemiVis(false);
                setPasVis(true);
                setSkimVis(false);
                setOtherVis(false);

                setGlassVis(false);
                setOrgGlassVis(false);
                setPolyVis(false);
                setOrgPolyVis(false);
                setPerGalVis(false);
                setAltVis(false);
                setCreamVis(false);
                setJuiceVis(false);
                setBreadVis(false);
                break;
            case "Skim":
                setSemiVis(false);
                setPasVis(false);
                setSkimVis(true);
                setOtherVis(false);

                setGlassVis(false);
                setOrgGlassVis(false);
                setPolyVis(false);
                setOrgPolyVis(false);
                setPerGalVis(false);
                setAltVis(false);
                setCreamVis(false);
                setJuiceVis(false);
                setBreadVis(false);
                break;
            case "Alt":
                setSemiVis(false);
                setPasVis(false);
                setSkimVis(false);
                setOtherVis(true);

                setGlassVis(false);
                setOrgGlassVis(false);
                setPolyVis(false);
                setOrgPolyVis(false);
                setPerGalVis(false);
                setAltVis(false);
                setCreamVis(false);
                setJuiceVis(false);
                setBreadVis(false);
                break;
            default:
        }
    }


    function handleBottle(type) {
        console.log(type);
        switch (type) {
            case "All":
                setGlassVis(true);
                setOrgGlassVis(true);
                setPolyVis(true);
                setOrgPolyVis(true);
                setPerGalVis(true);
                setAltVis(true);
                setCreamVis(true);
                setJuiceVis(true);
                setBreadVis(true);

                setSemiVis(false);
                setPasVis(false);
                setSkimVis(false);
                setOtherVis(false);
                break;
            case "Glass":
                setGlassVis(true);
                setOrgGlassVis(true);
                setPolyVis(false);
                setOrgPolyVis(false);
                setPerGalVis(false);
                setAltVis(true);
                setCreamVis(false);
                setJuiceVis(true);
                setBreadVis(false);

                setSemiVis(false);
                setPasVis(false);
                setSkimVis(false);
                setOtherVis(false);
                break;
            case "Poly":
                setGlassVis(false);
                setOrgGlassVis(false);
                setPolyVis(true);
                setOrgPolyVis(true);
                setPerGalVis(true);
                setAltVis(true);
                setCreamVis(true);
                setJuiceVis(false);
                setBreadVis(false);

                setSemiVis(false);
                setPasVis(false);
                setSkimVis(false);
                setOtherVis(false);
                break;
            case "Other":
                setGlassVis(false);
                setOrgGlassVis(false);
                setPolyVis(false);
                setOrgPolyVis(false);
                setPerGalVis(true);
                setAltVis(true);
                setCreamVis(true);
                setJuiceVis(true);
                setBreadVis(true);

                setSemiVis(false);
                setPasVis(false);
                setSkimVis(false);
                setOtherVis(false);
                break;
            default:
        }
    }


    return (
        <div className="row">
            <div className="filter-section-mobile">
                <div className="filter-mobile-inner">
                    <Dropdown drop="end">
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as="button" onClick={() => handleMilk("All")}>All</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => handleMilk("Semi")}>Semi Skimmed</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => handleMilk("Pas")}>Pasteurised</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => handleMilk("Skim")}>Skimmed</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => handleMilk("Alt")}>Alternate</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown drop="end">
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as="button" onClick={() => handleBottle("All")}>All</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => handleBottle("Glass")}>Glass</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => handleBottle("Poly")}>Poly</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => handleBottle("Other")}>Other</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="col-md-1 filter-section">
                Filter by:

                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Milk Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={() => handleMilk("All")}>All</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleMilk("Semi")}>Semi Skimmed</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleMilk("Pas")}>Pasteurised</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleMilk("Skim")}>Skimmed</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleMilk("Alt")}>Alternate</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Bottle Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={() => handleBottle("All")}>All</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleBottle("Glass")}>Glass</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleBottle("Poly")}>Poly</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleBottle("Other")}>Other</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="col-md-11 produce-section">
                {glassVis && <ProduceGrid key="glassArray" title="Glass" data={glassArray} />}
                {orgGlassVis && <ProduceGrid key="glassOrgArray" title="Glass Organic" data={orgGlassArray} />}
                {polyVis && <ProduceGrid key="polyArray" title="Poly" data={polyArray} />}
                {orgPolyVis && <ProduceGrid key="orgPolyArray" title="Organic Poly" data={orgPolyArray} />}
                {perGalVis && <ProduceGrid key="perGalArray" title="Per Gal" data={perGalArray} />}
                {creamVis && <ProduceGrid key="creamArray" title="Cream" data={creamArray} />}
                {altVis && <ProduceGrid key="alternateArray" title="Alternate Milk" data={alternateArray} />}
                {juiceVis && <ProduceGrid key="juiceArray" title="Juice" data={juiceArray} />}
                {breadVis && <ProduceGrid key="breadArray" title="Bread" data={breadArray} />}

                {semiVis && <ProduceGrid key="semiArray" title="Semi" data={semiArray} />}
                {pasVis && <ProduceGrid key="pasArray" title="Pasteurised" data={pasArray} />}
                {skimVis && <ProduceGrid key="skimArray" title="Skimmed" data={skimArray} />}
                {otherVis && <ProduceGrid key="otherArray" title="Other" data={otherArray} />}
            </div>

        </div>
    );
}

export default Produce;