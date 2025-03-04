import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../images/home.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Reset Password Request for:", email);

    // Navigate to Login page after submission
    navigate("/");
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
    formBox: {
      width: "50%",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
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
      width: "70%",
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
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Form on the Left */}
        <div style={styles.formBox}>
          <h2>Forgot Password</h2>
          <p>Please enter your email to reset your password.</p>
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                Reset Password
              </button>
            </div>
          </form>

          {/* Back to Login Link */}
          <p style={styles.textLink}>
            Remember your password?
            <a href="/" style={styles.link}> Sign in</a>
          </p>
        </div>

        {/* Image on the Right */}
        <div style={styles.imageContainer}>
          <img src={home} alt="Forgot Password Illustration" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
