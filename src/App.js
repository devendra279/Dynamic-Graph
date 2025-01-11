import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MetricDropdown from "./components/MetricDropdown";
import DeviceDropdown from "./components/DeviceDropdown";
import Graph from "./components/Graph";
import Footer from "./components/Footer";
const App = () => {
  const [selectedMetric, setSelectedMetric] = useState("lcp"); 
  const [selectedDevice, setSelectedDevice] = useState("desktop"); 
  const [graphData, setGraphData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://example-metrics.speedvitals.workers.dev/?metric=${selectedMetric}&device=${selectedDevice}`
        );
        
       
        const responseData = await response.json();
        console.log("API Response Data:", responseData);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Check if the response contains timeseries and values
        if (responseData.timeseries && responseData.values) {
          setGraphData(responseData);
        } else {
          throw new Error("Invalid response format from API.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please check the API URL.");
        
        // Fallback to mock data for testing
        setGraphData({
          timeseries: [11, 12, 13, 14, 15, 16, 17],
          values: [211, 123, 154, 324, 121, 323, 533],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedMetric, selectedDevice]);

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <MetricDropdown
          selectedMetric={selectedMetric}
          onChange={setSelectedMetric}
        />
        <DeviceDropdown
          selectedDevice={selectedDevice}
          onChange={setSelectedDevice}
        />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <Graph data={graphData} />
        )}
      </div>
      <Footer /></div>
  );
};

export default App;
