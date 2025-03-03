import React from "react";
import ContactHome from "../Components/ContactHome";
import Footer from "../Components/Footer";

const ContactUsPage = () => {
  return (
    <div>
      <ContactHome />
      <div style={styles.pageContainer}>
        {/* Header Section */}
        <header style={styles.header}>
          <h1 style={styles.title}>Contact Us</h1>
          <p style={styles.subtitle}>
            Have questions? Our team is here to help! Reach out today.
          </p>
        </header>

        {/* Main Section */}
        <section style={styles.mainSection}>
          {/* Left Side Content */}
          <div style={styles.leftContent}>
            <h2 style={styles.projectHeader}>Let's Talk!</h2>
            <p style={styles.paragraph}>
              We'd love to hear from you. Fill out the form below, and we'll get back to you shortly.
            </p>
          </div>

          {/* Right Side Form */}
          <div style={styles.formContainer}>
            <form style={styles.form}>
              <div style={styles.row}>
                <div style={styles.inputGroup}>
                  <input type="text" placeholder="Your Name" style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <input type="email" placeholder="Your Email" style={styles.input} />
                </div>
              </div>
              <div style={styles.row}>
                <div style={styles.inputGroup}>
                  <input type="text" placeholder="Phone Number" style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <select style={styles.input}>
                    <option value="">Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>
              <div style={styles.row}>
                <div style={styles.inputGroup}>
                  <input type="text" placeholder="Company Name" style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <select style={styles.input}>
                    <option value="">Interested in</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
              </div>
              <div style={styles.inputGroup}>
                <textarea
                  placeholder="Your Message"
                  style={{ ...styles.input, ...styles.textarea }}
                ></textarea>
              </div>
              <button type="submit" style={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#fff",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#f8f9fa",
    padding: "40px 20px",
    textAlign: "center",
    borderBottom: "2px solid #ddd",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
  },
  mainSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    color: "#333",
  },
  leftContent: {
    flex: 1,
    textAlign: "left",
    padding: "20px",
  },
  projectHeader: {
    fontSize: "40px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    margin: "10px 0",
    color: "#666",
  },
  formContainer: {
    flex: 1,
    textAlign: "left",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
  },
  inputGroup: {
    flex: 1,
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
    outline: "none",
    color: "#333",
  },
  textarea: {
    resize: "none",
    height: "80px",
  },
  submitButton: {
    padding: "12px 20px",
    backgroundColor: "#ff6600",
    border: "none",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
    textAlign: "center",
    width: "150px",
    alignSelf: "flex-start",
  },
};

export default ContactUsPage;
