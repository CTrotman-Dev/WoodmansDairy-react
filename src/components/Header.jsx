import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

// const isRegistered = false;
// const isLoggedIn = false;
function Header() {
  return (
    <Navbar
      collapseOnSelect
      className="navbar"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Nav.Link eventKey="5" as={Link} className="nav-item" href="/" to="/">
        <Navbar.Brand>Woodman's Dairy</Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-0">
          <Nav.Link eventKey="0" as={Link} className="nav-item" href="/" to="/">
            Home
          </Nav.Link>
          <Nav.Link
            eventKey="1"
            as={Link}
            className="nav-item"
            href="/produce"
            to="/produce"
          >
            Produce
          </Nav.Link>
          <Nav.Link
            eventKey="2"
            as={Link}
            className="nav-item"
            href="/news"
            to="/news"
          >
            News
          </Nav.Link>
          <Nav.Link
            eventKey="3"
            as={Link}
            className="nav-item"
            href="/about"
            to="/about"
          >
            About
          </Nav.Link>
          <Nav.Link
            eventKey="4"
            as={Link}
            className="nav-item"
            href="/contact"
            to="/contact"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
