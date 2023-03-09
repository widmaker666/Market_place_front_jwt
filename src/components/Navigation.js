import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
         
        </Navbar.Brand>
        <Nav className="me-auto">   
        <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
          >
            <li>home</li>
          </NavLink>       
          <NavLink
            to="/profil"
            className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
          >
            <li>Profil</li>
          </NavLink>
          <NavLink
            to="/login"
            className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
          >
            <li>Login</li>
          </NavLink>
          <NavLink
            to="/sign_in"
            className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
          >
            <li>s'inscrire</li>
          </NavLink>
          
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;