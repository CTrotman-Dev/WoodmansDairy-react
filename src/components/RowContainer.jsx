import React from "react";

const RowContainer = (props) =>{
    return(
        <div className="row">
            {props.children}
        </div>
    );
}

export default RowContainer;