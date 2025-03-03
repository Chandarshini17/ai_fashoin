import React from "react";
import aiFashion1 from "../images/creative1.png";
import aiFashion2 from "../images/creative2.png";
import aiFashion3 from "../images/creative1.png";
import aiFashion4 from "../images/creative2.png";

const AIFashionPage = () => {
  return (
    <div style={styles.body}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h2 style={styles.heading} className="fade-in">AI-Driven Fashion</h2>
        <p style={styles.paragraph} className="fade-in">
          Our AI technology analyzes your style preferences and suggests outfits tailored just for you.
          Whether it’s casual, formal, or trendy, our AI ensures you stay fashionable effortlessly.
        </p>
      </div>

      {/* AI Fashion Preview */}
      <div style={styles.imageContainer}>
        <div style={styles.originalPhoto}>
          <span style={styles.tag}>Original photo</span>
          <img src={aiFashion1} alt="Original" style={styles.image} className="float-animation" />
        </div>
        <div style={styles.aiGenerated}>
          <span style={styles.tag}>AI-generated photos</span>
          <div style={styles.aiImages}>
            <img src={aiFashion1} alt="AI Fashion 1" style={styles.aiImage} className="float-animation" />
            <img src={aiFashion2} alt="AI Fashion 2" style={styles.aiImage} className="float-animation" />
            <img src={aiFashion3} alt="AI Fashion 3" style={styles.aiImage} className="float-animation" />
            <img src={aiFashion4} alt="AI Fashion 4" style={styles.aiImage} className="float-animation" />
          </div>
        </div>
      </div>
      
      {/* Call-to-Action */}
      <div style={styles.ctaSection}>
        <button style={styles.ctaButton} className="fade-in">Try Now</button>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Poppins, sans-serif",
    margin: 0,
    padding: "50px 0",
    boxSizing: "border-box",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f8f9fa, #e3e3e3)",
  },
  heroSection: {
    padding: "50px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#333",
  },
  paragraph: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.8",
    maxWidth: "700px",
    margin: "auto",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "40px",
  },
  originalPhoto: {
    position: "relative",
    marginBottom: "30px",
  },
  aiGenerated: {
    position: "relative",
    textAlign: "center",
  },
  tag: {
    position: "absolute",
    top: "-30px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "black",
    color: "white",
    padding: "8px 12px",
    borderRadius: "5px",
    fontSize: "14px",
  },
  image: {
    width: "200px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 7px 20px rgba(0, 0, 0, 0.15)",
  },
  aiImages: {
    display: "flex",
    gap: "15px",
  },
  aiImage: {
    width: "150px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 7px 20px rgba(0, 0, 0, 0.15)",
  },
  ctaSection: {
    marginTop: "50px",
  },
  ctaButton: {
    padding: "14px 28px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    background: "#ff4d4d",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default AIFashionPage;

/* CSS Animations */
const stylesCss = `
  .fade-in {
    opacity: 0;
    animation: fadeIn 1.2s ease-in forwards;
  }
  .float-animation {
    animation: floatUpDown 2.5s infinite ease-in-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes floatUpDown {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = stylesCss;
document.head.appendChild(styleSheet);