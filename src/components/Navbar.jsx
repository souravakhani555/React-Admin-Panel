import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Navbyme = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id='cont'>
        <div>
          <Navbar.Brand as={NavLink} to="/" id='nav-text'>User Admin Panel</Navbar.Brand>

        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/user" id='navlink' >Users</Nav.Link>
              <Nav.Link as={NavLink} to="/products" id='navlink'>Products</Nav.Link>
              <Nav.Link as={NavLink} to="/orders" id='navlink'>Orders</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbyme;
