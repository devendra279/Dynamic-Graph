import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "#ecf0f1",
        padding: "20px 0",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <div className="container">
        <p style={{ fontSize: "16px", marginBottom: "10px" }}>
          Made by <span style={{ fontWeight: "bold", color: "#e74c3c" }}>Devendra</span> ❤️ for{" "}
          <span style={{ fontWeight: "bold", color: "#3498db" }}>SpeedVitals</span>
        </p>
        <form className="d-flex justify-content-center mb-3">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Subscribe to our newsletter"
            style={{
              maxWidth: "300px",
              borderRadius: "10px",
              border: "2px solid #34495e",
              padding: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              borderRadius: "10px",
              backgroundColor: "#3498db",
              border: "none",
              padding: "10px 20px",
            }}
          >
            Subscribe
          </button>
        </form>
        <div style={{ fontSize: "14px", color: "#bdc3c7" }}>
          © {new Date().getFullYear()} SpeedVitals. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
