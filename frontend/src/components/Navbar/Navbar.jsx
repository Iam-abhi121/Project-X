import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container, Form } from 'react-bootstrap';
import { ThemeContext } from '../../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs'; // Bootstrap icons
import './Navbar.css';

const CustomNavbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  return (
    <Navbar expand="lg" className="custom-glass-navbar shadow-sm py-3" fixed="top">
      <Container className='Navbar-container'>
        <Navbar.Brand href="#" className="Brand-name fw-bold fs-4">
          Pro<span className="text-primary">ject</span>
          <img src="src/assets/fevicon.png" alt="favicon" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="category-nav me-3 fw-medium gap-4">
            <Nav.Link className='category-Pro' href="#projects">Projects</Nav.Link>
            <Nav.Link className='category-cat' href="#categories">Categories</Nav.Link>
            <Nav.Link className="category-abo" href="#about">About</Nav.Link>
          </Nav>

          <div className="d-flex gap-3 align-items-center">

            {/* Login/Signup buttons */}
            <Button variant="primary" className="px-4 rounded-4" href='login'>Log in</Button>
            <Button variant="dark" className="px-4 rounded-4" href='signup'>Sign Up</Button>


             {/* Theme Toggle Switch */}
            <Form>
              <Form.Check 
                type="switch"
                id="dark-mode-switch"
                label={theme === 'dark' ? <BsMoon size={20} /> : <BsSun size={20} />}
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className="theme-switch"
              />
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
