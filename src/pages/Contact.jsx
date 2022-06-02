import React from "react";

import Form from "../components/Form";
import ContactCard from "../components/ContactCard";

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>
            Details
            </h1>
            <h3>
            Contact us for your local dairy delivery today, delivering fresh milk, eggs and more to Cardiff and the surrounding areas.
            </h3>
            <p>
                Please call us today on <strong><a href="tel:07968807248">07968807248</a></strong> or email <strong><a href="mailto:woodymilk1@yahoo.co.uk">woodymilk1@yahoo.co.uk</a></strong>.
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