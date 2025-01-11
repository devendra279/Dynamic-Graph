import React from "react";

const DeviceDropdown = ({ selectedDevice, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="deviceDropdown" className="form-label" style={{ fontWeight: "bold", color: "#2c3e50" }}>
        Select Device Type
      </label>
      <select
        id="deviceDropdown"
        className="form-select"
        value={selectedDevice}
        onChange={(e) => onChange(e.target.value)}
        style={{
          borderRadius: "10px",
          border: "2px solid #34495e",
          padding: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <option value="" disabled>
          Choose a Device
        </option>
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
      </select>
    </div>
  );
};

export default DeviceDropdown;
