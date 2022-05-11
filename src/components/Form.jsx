import React, { useState } from "react";

const Form = (props) => {
    const [contact, setContact] = useState({
        fullname: "",
        email: "",
        message: ""
    });

    function handleFormChanges(event) {
        const { value, name } = event.target;
        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleSubmit(event){
        window.open("mailto:woodymilk@yahoo.co.uk?subject=Customer%20Enquiry&body="+contact.message);
        event.preventDefault();
    }

    return (
        <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
                <input onChange={handleFormChanges} value={contact.fullname} type="text" placeholder="Full name" name="fullname" />
                <input onChange={handleFormChanges} value={contact.email} type="text" placeholder="Email" name="email" />
                <textarea onChange={handleFormChanges} value={contact.message} name="message" placeholder="Enter message here" rows={5} cols={50} />
                <button type="submit" className="btn btn-lg btn-danger">
                    Send
                </button>
            </form>
        </div>
    );
}

export default Form;