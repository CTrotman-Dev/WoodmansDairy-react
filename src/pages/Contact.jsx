import React from "react";

import Form from "../components/Form";
import ContactCard from "../components/ContactCard";

const Contact = () => {
    return (
        <div className="">
            <h1>
            Contact Us
            </h1>
            <p>
                Please call us today on 07968807248 or email woodymilk1@yahoo.co.uk.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <ContactCard
                        name="Address:"
                        address1="Woodman’s Dairy"
                        address2="Unit 41"
                        address3="Pwllmawr Court"
                        address4="Rumney"
                        address5="Cardiff"
                        address6="CF3 1TH"
                    />
                </div>
                <div className="col-md-6">
                    <Form />
                </div>
            </div>


        </div>
    );
}

export default Contact;