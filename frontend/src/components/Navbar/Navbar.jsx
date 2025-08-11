// components/CustomNavbar.js
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-glass-navbar shadow-sm py-3" fixed="top">
      <Container className='Navbar-container '>
        <Navbar.Brand href="#" className="Brand-name fw-bold fs-4 ">
          Pro<span className="text-primary">ject</span> X
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="category-nav me-3 fw-medium gap-4">
            <Nav.Link className='category-Pro' href="#projects">Projects</Nav.Link>
            <Nav.Link className='category-cat' href="#categories">Categories</Nav.Link>
            <Nav.Link className="category-abo" href="#about">About</Nav.Link>
          </Nav>

          <div className="d-flex gap-2 column justify-content-center align-items-center">
            <Button variant="primary" className="px-4 rounded-4" href='login'>Log in</Button>
            <Button variant="dark" className="px-4 rounded-4" href='signup'>Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
