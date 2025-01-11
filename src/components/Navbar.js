import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2c3e50", color: "white" }}>
      <div className="container-fluid">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: "white", fontWeight: "bold" }}>
          {/* <img 
            src="https://example.com/speedvitals-logo.png" 
            alt="SpeedVitals Logo" 
            style={{ height: "40px", marginRight: "10px", borderRadius: "5px" }} 
          /> */}
          SpeedVitals
        </a>

        {/* Navbar Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ border: "1px solid white", color: "white" }}
        >
          <span className="navbar-toggler-icon" style={{ backgroundColor: "white" }}></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" style={{ color: "white" }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features" style={{ color: "white" }}>Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" style={{ color: "white" }}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <form className="d-flex ms-auto">
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            style={{ borderRadius: "20px", border: "none", padding: "10px 15px" }}
          />
          <button 
            className="btn" 
            type="submit" 
            style={{ backgroundColor: "#e74c3c", color: "white", borderRadius: "20px", padding: "5px 15px", border: "none" }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
