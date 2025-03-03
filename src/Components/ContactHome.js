import React from "react";
import heroImage from "../images/home.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div
        style={{
          background: "#F9C745",
          padding: "50px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Navbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={logo} alt="AI Fashion Logo" style={{ width: "120px" }} />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/home" style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Home</Link>
            <Link to="/products" style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Products</Link>
            <Link to="/contact" style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Contact Us</Link>
            <Link to="/" style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Login</Link>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            marginTop: "50px",
          }}
        >
          <div style={{ maxWidth: "500px", textAlign: "left" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#000" }}>
              Contact Us
            </h2>
            <p style={{ fontSize: "20px", color: "#000", fontWeight: "bold" }}>
              Have questions We'd love to hear from you?
            </p>
            <button
              style={{
                marginTop: "20px",
                padding: "12px 24px",
                backgroundColor: "#E94E32",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Contact Us →
            </button>
          </div>
          <div>
            <img src={heroImage} alt="Product Showcase" style={{ maxWidth: "600px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
