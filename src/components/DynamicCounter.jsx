import React, {useState} from "react";

const DynamicCounter = () => {
    const [count, setCount] = useState(0);
    

    function increase() {
        setCount(count+1);
    }

    function decrease() {
        setCount(count-1);
    }

    return (
        <div className="">
            <h1>{count}</h1>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default DynamicCounter;