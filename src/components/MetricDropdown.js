import React from "react";

const MetricDropdown = ({ selectedMetric, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="metricDropdown" className="form-label">
        Select Metric
      </label>
      <select
        id="metricDropdown"
        className="form-select"
        value={selectedMetric}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled selected>
          Select Metric
        </option>
        <option value="lcp">LCP</option>
        <option value="cls">CLS</option>
      </select>
    </div>
  );
};

export default MetricDropdown;
