import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../images/home.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

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
    container: {
      display: "flex",
      width: "80%",
      maxWidth: "1000px",
      background: "white",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    },
    loginBox: {
      width: "50%",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "500px"
    },
    input: {
      width: "90%",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
    button: {
      backgroundColor: "#F9C745",
      color: "white",
      border: "none",
      padding: "10px",
      width: "50%",
      cursor: "pointer",
      fontSize: "16px",
      borderRadius: "4px",
      marginTop: "10px",
      textAlign: "center",
    },
    buttonHover: {
      backgroundColor: "#e6b63f",
    },
    textLink: {
      marginTop: "10px",
      fontSize: "14px",
      color: "#555",
    },
    link: {
      color: "#F9C745",
      cursor: "pointer",
      textDecoration: "none",
      fontWeight: "bold",
      marginLeft: "5px",
    },
    imageContainer: {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    image: {
      width: "90%",
      maxWidth: "400px",
      height: "auto",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Login Form */}
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
            {/* Centered Button */}
            <div style={styles.buttonContainer}>
              <button
                type="submit"
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              >
                Login
              </button>
            </div>
          </form>

          {/* Forgot Password & Sign In */}
          <p style={styles.textLink}>
            Forgot your password?
            <a href="/forgotpassword" style={styles.link}> Reset</a>
          </p>
          <p style={styles.textLink}>
            Already have an account?
            <a href="/signup" style={styles.link}> Sign up</a>
          </p>
        </div>

        {/* Image Section */}
        <div style={styles.imageContainer}>
          <img src={home} alt="Login Illustration" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Login;
