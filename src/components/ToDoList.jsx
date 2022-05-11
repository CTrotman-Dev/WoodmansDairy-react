import React, { useState } from "react";

import ToDoListInput from "./ToDoListInput";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    const [itemList, setItemList] = useState([]);


    function addNewItem(newItem) {
        console.log(newItem);
        
        setItemList(prevValues => {
            return [...prevValues,newItem];
        });
    }

    function deleteItem(id){
        console.log("checked");
        setItemList(prevValues => {
            return prevValues.filter((item,index)=>{
                return index !== id;
            })
        });
    }


    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <ToDoListInput onAdd={addNewItem}/>
            <div>
                <ul>
                    {itemList.map((item,i) => <ToDoItem
                    key={i} 
                    id={i}
                    text={item}
                    onChecked={deleteItem}   
                    />)}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;