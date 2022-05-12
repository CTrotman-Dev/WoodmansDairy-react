import React from "react";
import { Link } from "react-router-dom";


// const isRegistered = false;
// const isLoggedIn = false;
function Header() {
    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Woodman's Dairy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/">Home</Link>
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                        <Link to="/produce">Produce</Link>
                            {/* <a className="nav-link" href="#">Produce</a> */}
                        </li>
                        <li className="nav-item">
                        <Link to="/news">News</Link>
                            {/* <a className="nav-link" href="#">News</a> */}
                        </li>
                        <li className="nav-item">
                        <Link to="/about">About</Link>
                            {/* <a className="nav-link" href="#">Contact Us</a> */}
                        </li>
                        <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                            {/* <a className="nav-link" href="#">Contact Us</a> */}
                        </li>
                    </ul>
                   {/*  <form className="d-flex">
                        {(!isRegistered && !isLoggedIn) && <button className="btn btn-light" type="submit">Register</button>}
                        {isLoggedIn ? <p>Hello!</p> : <button className="btn btn-dark" type="submit">Login</button>}

                    </form> */}
                </div>
            </div>
        </nav>
    );
}

export default Header;