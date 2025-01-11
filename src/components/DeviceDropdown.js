import React from "react";

const DeviceDropdown = ({ selectedDevice, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="deviceDropdown" className="form-label">
        Select Device Type
      </label>
      <select
        id="deviceDropdown"
        className="form-select"
        value={selectedDevice}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled selected>
          Select Device Type
        </option>
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
      </select>
    </div>
  );
};

export default DeviceDropdown;
