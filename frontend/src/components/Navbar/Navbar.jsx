import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { ThemeContext } from '../../context/ThemeContext';
import './Navbar.css';
import { PiSunHorizonFill,PiMoonFill } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";


const CustomNavbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // Toggle light/dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Navbar expand="lg" className="custom-glass-navbar shadow-sm py-3" fixed="top">
      <Container className="Navbar-container">
        <Navbar.Brand href="/" className="Brand-name fw-bold fs-4">
          Pro<span className="text-primary">ject</span>
          <img src="src/assets/fevicon.png" alt="favicon" />
        </Navbar.Brand>

        <Navbar id="main-navbar" className="category-nav justify-content-end">
          <Nav className="Nav me-3 fw-medium gap-4">
            <Nav.Link className="category-Pro" href="#projects">Projects</Nav.Link>
            <Nav.Link className="category-cat" href="#categories">Categories</Nav.Link>
            <Nav.Link className="category-abo" href="#about">About</Nav.Link>
          </Nav>

          <div className="d-flex gap-3 align-items-center">
            {/* Login/Signup buttons */}
            <Button variant="primary" className="login px-4 rounded-4" href="login">Log in</Button>
            <Button variant="dark" className="signup px-4 rounded-4" href="signup">Sign Up</Button>

            {/* Theme Switch */}
            <label className="theme-switch">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <span className="slider">
                <span className="sun"><PiSunHorizonFill /></span>
                <span className="moon"><FaMoon /></span>
              </span>
            </label>
          </div>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
