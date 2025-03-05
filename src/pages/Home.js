import React from "react";
import heroImage from "../images/home.png";
import logo from "../images/logo.png";
import Icons from "../Components/Icons";
import Service from "../Components/Services";
import Footer from '../Components/Footer';
import HowItWorks from '../Components/HowItWorks';
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
            <Link to="/" style={{ textDecoration: "none", color: "#000", fontSize: "18px" }}>Logout</Link>
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
              Welcome to AI Fashion Hub
            </h2>
            <p style={{ fontSize: "20px", color: "#000", fontWeight: "bold" }}>
              Transform Your Avatar with Style
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
              Request a demo →
            </button>
          </div>
          <div>
            <img src={heroImage} alt="Fashion Illustration" style={{ maxWidth: "600px" }} />
          </div>
        </div>
      </div>
      <Icons />
      <HowItWorks />
      <Service />
      <Footer />
    </div>
  );
};

export default Hero;
