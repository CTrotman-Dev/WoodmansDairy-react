import React, {useState} from "react";

const ToDoListInput = (props) => {
    const [newItem, setNewItem] = useState("");

    function getText(event) {
        const newValue = event.target.value;
        setNewItem(newValue);
    }
 

    return (
        <div className="form">
            <input type="text" onChange={getText} value={newItem}/>
            <button onClick={() => {
                props.onAdd(newItem);
                setNewItem("");
                }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default ToDoListInput;