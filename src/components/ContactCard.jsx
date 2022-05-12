import React from "react";
import Avatar from "./Avatar";
import CardDetails from "./CardDetails";

function ContactCard(props) {
    return (
        <div className="contact-card">
                <div className="top">
                    <h2 className="name">
                        {props.name}
                    </h2>

                </div>
                <div className="bottom">
                    <CardDetails detailInfo={props.address1} />
                    <CardDetails detailInfo={props.address2} />
                    <CardDetails detailInfo={props.address3} />
                    <CardDetails detailInfo={props.address4} />
                    <CardDetails detailInfo={props.address5} />
                    <CardDetails detailInfo={props.address6} />
                </div>
            

        </div>
    );
}

export default ContactCard;