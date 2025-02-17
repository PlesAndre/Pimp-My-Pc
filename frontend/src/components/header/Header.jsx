import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import "./style.css";
import { Link } from "react-router-dom";
// import Link from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* <Link to="/"> */}
        <Navbar.Brand className="p-0">
          <img className="logo-brand" src={logo} alt="logo" />
        </Navbar.Brand>
        {/* </Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-around w-100">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="setups">
              SETUPS
            </Nav.Link>
            <Nav.Link as={Link} to="components">
              COMPONENTI
            </Nav.Link>
            <Nav.Link as={Link} to="register">
              REGISTRATI
            </Nav.Link>
            <Nav.Link as={Link} to="login">
              ACCEDI
            </Nav.Link>
            <Nav.Link>
              <i className="bi bi-basket-fill"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
