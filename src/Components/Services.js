import React from "react";
import trendImage from "../images/service1.png";
import designImage from "../images/service2.png";
import efficiencyImage from "../images/service3.png";

const AIFashoid = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Why AI Fashoin?</h1>
      <p style={styles.description}>
        AI Fashoid is revolutionizing the fashion industry by leveraging artificial intelligence to create cutting-edge designs, predict trends, and enhance efficiency like never before.
      </p>
      <div style={styles.cardWrapper}>
        {/* Card 1 - AI-Driven Trends */}
        <div style={styles.card}>
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <img src={trendImage} alt="AI-Driven Trends" style={styles.image} />
              </div>
              <div className="flip-back">
                <h3 style={styles.cardHeading}>AI-Driven Trends</h3>
                <p style={styles.cardDescription}>
                  Our AI algorithms analyze fashion trends to help brands stay ahead in the market with data-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Intelligent Design */}
        <div style={styles.card}>
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <img src={designImage} alt="Intelligent Design" style={styles.image} />
              </div>
              <div className="flip-back">
                <h3 style={styles.cardHeading}>Intelligent Design</h3>
                <p style={styles.cardDescription}>
                  AI-generated fashion designs combine creativity with technology, bringing futuristic styles to life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Efficiency & Sustainability */}
        <div style={styles.card}>
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <img src={efficiencyImage} alt="Efficiency & Sustainability" style={styles.image} />
              </div>
              <div className="flip-back">
                <h3 style={styles.cardHeading}>Efficiency & Sustainability</h3>
                <p style={styles.cardDescription}>
                  AI streamlines production, reduces waste, and ensures sustainable practices in fashion manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inject CSS for flip effect */}
      <style>
        {`
          .flip-card {
            perspective: 1000px;
            width: 300px;
            height: 300px;
          }

          .flip-inner {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s ease;
          }

          .flip-card:hover .flip-inner {
            transform: rotateY(180deg);
          }

          .flip-front,
          .flip-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            background-color: #fff;
          }

          .flip-back {
            transform: rotateY(180deg);
            flex-direction: column;
            padding: 20px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  description: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "40px",
    flexWrap: "wrap",
  },
  card: {
    width: "300px",
    height: "300px",
  },
  image: {
    width: "200px",
    height: "200px",
  },
  cardHeading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.6",
    textAlign: "center",
  },
};

export default AIFashoid;
