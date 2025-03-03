import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  const styles = {
    footerContainer: {
      background: "#F9C745",
      padding: "40px 10%",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    footerQuote: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    footerBottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      borderTop: "2px solid #fff",
      paddingTop: "20px",
      marginTop: "20px",
    },
    socialIcons: {
      display: "flex",
      gap: "20px",
    },
    icon: {
      fontSize: "24px",
      color: "#333",
      textDecoration: "none",
      transition: "color 0.3s ease-in-out",
    },
    iconHover: {
      color: "#503164",
    },
    footerRights: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    logo: {
      width: "35px",
      height: "35px",
    },
  };

  return (
    <footer style={styles.footerContainer}>
      <p style={styles.footerQuote}>
        “Shop Smart - Your Trusted E-Commerce Partner!”
      </p>
      <div style={styles.footerBottom}>
        <div style={styles.socialIcons}>
          <a href="#" style={styles.icon} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div style={styles.footerRights}>
          <span>© AI Fashoin</span>
          <img src={logo} alt="Lexiontech Logo" style={styles.logo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
