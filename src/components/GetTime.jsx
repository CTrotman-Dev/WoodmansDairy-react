import React, { useState } from "react";

const GetTime = () => {
    let initTime = new Date().toLocaleTimeString();
    const [time,setTime] = useState(initTime);

    setInterval(getTime,1000);
    function getTime()
    {
        setTime(new Date().toLocaleTimeString());
    }
    
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={getTime}>Get Time</button>
        </div>
    );
}

export default GetTime;