import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

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
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>
          Welcome Back <span role="img" aria-label="wave">👋</span>
        </h2>
        <p style={styles.subtitle}>Log in to your social world</p>

        <form onSubmit={handleLogin} style={styles.form}>
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
        </form>

        <p style={styles.orText}>Or login with</p>
        <div style={styles.socialIcons}>
          <FaGoogle style={{ ...styles.icon, color: "#DB4437" }} />
          <FaFacebook style={{ ...styles.icon, color: "#3b5998" }} />
          <FaTwitter style={{ ...styles.icon, color: "#1da1f2" }} />
        </div>

        <p style={styles.signupText}>
          Don't have an account?{" "}
          <a href="/signup" style={styles.link}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh", // ensure covers all viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
    width: "320px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
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
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#f76c6c",
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
