import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import Navbar from "../../../components/Navbar/Navbar";
import "./Login.css";
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar";
import {Link} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "password") {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return (
    <>
      <Navbar />
      <div className="login-background">
      <div className="login-container">
          <form onSubmit={handleLogin} style={styles.form}>
          <h2 style={styles.heading}>
            Welcome Back <span role="img" aria-label="wave">👋</span>
          </h2>
          <p style={styles.subtitle}>Log in to your social world</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Login</button>
          

          <p style={styles.orText}>Or login with</p>
          <div style={styles.socialIcons}>
            <FaGoogle style={{ ...styles.icon, color: "#DB4437" }} />
            <FaFacebook style={{ ...styles.icon, color: "#3b5998" }} />
            <FaTwitter style={{ ...styles.icon, color: "#1da1f2" }} />
          </div>

          <p style={styles.signupText}>
            Don't have an account?{" "}
            <Link to="/signup" style={styles.link}>Sign up</Link>
          </p> 
        </form> 
      </div>
    </div>
      <MobileNavbar />
    </>
  );
};

const styles = {

  heading: {
    fontSize: "1.5rem",
    marginBottom: "0.3rem",
  },
  subtitle: {
    color: "#777",
    marginBottom: "1.5rem",
    fontSize: "0.9rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    padding: "2rem",
    // border: "1px solid #00bbffff",
    alignItems: "center",

  },
  input: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#009dffff",
    border: "none",
    color: "white",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  orText: {
    margin: "1rem 0 0.5rem",
    color: "#555",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
  },
  icon: {
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  signupText: {
    fontSize: "0.9rem",
    color: "#555",
  },
  link: {
    color: "#f76c6c",
    textDecoration: "none",
  },
};

export default Login;
