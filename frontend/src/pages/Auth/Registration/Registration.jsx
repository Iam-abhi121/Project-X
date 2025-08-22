import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import Navbar from "../../../components/Navbar/Navbar";
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar";
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "", // start empty so "Select Account Type" shows first
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password &&
      formData.accountType
    ) {
      alert(`Registered successfully as ${formData.accountType}!`);
      navigate("/login");
    } else {
      alert("Please fill all fields and select an account type!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="registration-background">

      <div className="registration-container">
        <form onSubmit={handleRegister} style={styles.form}>
          <h2 style={styles.heading}>Create Account</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />

          {/* Account Type Dropdown with "Select Account Type" option */}
          {/* <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="" disabled>
              Select Account Type
            </option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="both">Both</option>
          </select> */}

          <button type="submit" style={styles.button}>
            Register
          </button>

          <p style={styles.orText}>Or Signup with</p>
          <div style={styles.socialIcons}>
            <FaGoogle style={{ ...styles.icon, color: "#DB4437" }} />
            <FaFacebook style={{ ...styles.icon, color: "#3b5998" }} />
            <FaTwitter style={{ ...styles.icon, color: "#1da1f2" }} />
          </div>


          <p style={styles.text}>
            Already have an account?{" "}
            <span style={styles.link} onClick={() => navigate("/login")}>
              Login
            </span>
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
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",

  },

  input: {
    width: "auto",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "0.9rem",
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: "100%",
    // padding: "0.5rem",
    backgroundColor: "#009dffff",
    border: "none",
    color: "white",
    borderRadius: "8px",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  text: {
    fontSize: "0.9rem",
    marginTop: "1rem",
    color: "#555",
  },
  link: {
    color: "#f76c6c",
    cursor: "pointer",

  },
  orText: {
    // margin: "1rem 0 0.5rem",
    color: "#555",
    textAlign: "center",
  },

  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    margin: "-1rem 0",
  },
  icon: {
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};

export default Registration;
