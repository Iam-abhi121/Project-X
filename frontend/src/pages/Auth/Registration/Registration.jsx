import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    // Full-page pink gradient background
    document.body.style.margin = "0";
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    document.body.style.background =
      "linear-gradient(to right, #faebf8ff, #faebf8ff)";
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create Account</h2>

        <form onSubmit={handleRegister} style={styles.form}>
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
          <select
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
          </select>

          <button type="submit" style={styles.button}>
            Register
          </button>

          <p style={styles.text}>
            Already have an account?{" "}
            <span style={styles.link} onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "80vh", // still keeps fixed height center
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fcfbfbff",
    padding: "1rem",
    borderRadius: "12px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "0.9rem",
  },
  button: {
    width: "100%",
    padding: "0.5rem",
    backgroundColor: "#f76c6c",
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
};

export default Registration;
