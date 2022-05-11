import React, { useState } from "react";

const ButtonEvents = () => {

    const [buttonColor, setButtonColor] = useState({
        backgroundColor: "white",
        color: "black"
    });

    const [fullName, setName] = useState({
        fName:"",
        lName:"",
    });

    function handleNameChange(event){
        const {value,name} = event.target;
        setName(prevValue => {
            if(name === "fName"){
                return {
                    fName:value,
                    lName:prevValue.lName
                };
            } else if(name === "lName"){
                return {
                    fName:prevValue.fName,
                    lName:value
                };
            }
        })       
    }

    function handleClick() {
        setHeadingText(fname+" "+lname);
    }

    function toggleOn() {
        setButtonColor({
            backgroundColor: "black",
            color: "white"
        });
    }

    function toggleOff() {
        setButtonColor({
            backgroundColor: "white",
            color: "black"
        });
    }

    return (
        <div className="container">
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <input name="fName" onChange={handleNameChange} type="text" placeholder="Enter first name" value={fullName.fName}/>
            <input name="lName" onChange={handleNameChange} type="text" placeholder="Enter last name" value={fullName.lName}/>
            <button style={buttonColor} className="btn btn-lg"
                onClick={handleClick}
                onMouseOut={toggleOff}
                onMouseOver={toggleOn}>
                Submit
            </button>
        </div>
    );
}

export default ButtonEvents;