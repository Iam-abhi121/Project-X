// components/CustomNavbar.js

import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="white" variant="light" className="shadow-sm py-3" fixed="top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4">
          Pro<span className="text-primary">ject</span> X <span className="text-secondary"></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="me-3 fw-medium gap-4">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>

          <div className="d-flex gap-2 column justify-content-center align-items-center">
            <Button variant="primary" className="px-4 rounded-4">Log in</Button>
            <Button variant="outline-dark" className="px-4 rounded-4">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
