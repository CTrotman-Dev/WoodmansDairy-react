import React, { useState } from "react";

const Form = (props) => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        password: "",
        passwordMatch: false
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

    return (
        <form className="form">
            <h1>{contact.username} {contact.email} {contact.password} {contact.passwordMatch}</h1>
            <input onChange={handleFormChanges} value={contact.username} type="text" placeholder="Username" name="username" />
            <input onChange={handleFormChanges} value={contact.email} type="text" placeholder="Email" name="email" />
            <input onChange={handleFormChanges} value={contact.password} type="password" placeholder="Password" name="password" />
            {!props.isRegistered && <input onChange={handleFormChanges} value={contact.passwordMatch} type="password" name="passwordMatch" placeholder="Confirm password" />}
            <button type="submit">
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
    );
}

export default Form;