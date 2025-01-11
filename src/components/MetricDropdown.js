import React from "react";

const MetricDropdown = ({ selectedMetric, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="metricDropdown" className="form-label" style={{ fontWeight: "bold", color: "#2c3e50" }}>
        Select Metric
      </label>
      <select
        id="metricDropdown"
        className="form-select"
        value={selectedMetric}
        onChange={(e) => onChange(e.target.value)}
        style={{
          borderRadius: "10px",
          border: "2px solid #34495e",
          padding: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <option value="" disabled>
          Choose a Metric
        </option>
        <option value="lcp">LCP</option>
        <option value="cls">CLS</option>
      </select>
    </div>
  );
};

export default MetricDropdown;
