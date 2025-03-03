import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router navigation

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    
    // Redirect to Home Page after successful login
    navigate("/home");
  };

  const styles = {
    body: {
      backgroundColor: "#F9C745",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    loginBox: {
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      width: "500px",
      textAlign: "center",
    },
    input: {
      width: "90%",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      backgroundColor: "#F9C745",
      color: "white",
      border: "none",
      padding: "10px",
      width: "80%",
      cursor: "pointer",
      fontSize: "16px",
      borderRadius: "4px",
      marginTop: "10px",
    },
    buttonHover: {
      backgroundColor: "#e6b63f",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
