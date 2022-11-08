import Link from "next/link";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const style = {
  backgroundColor: "black",
  padding: "0px 25px 0px 25px",
};

const NavigationBar = () => {
  return (
    <div style={style}>
      <Navbar
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="d-flex justify-content-between"
      >
        <Nav className="me-auto">
          <Link href="/" className="navbar-brand">
            <h2 className="font-weight-bolder">Anthony Sukotjo</h2>
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/#Projects" className="nav-link">
              <h3>Projects</h3>
            </Link>
            <Link href="/#Experience" className="nav-link">
              <h3>Work</h3>
            </Link>
            <Link href="/#Resume" className="nav-link">
              <h3>Resume</h3>
            </Link>
            <Link href="/#Contact" className="nav-link">
              <h3>Contact</h3>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
