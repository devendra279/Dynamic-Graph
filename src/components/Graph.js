import React, { useEffect } from "react";
import * as echarts from "echarts";

const Graph = ({ data }) => {
  useEffect(() => {
    console.log("Graph component mounted with data:", data);

   
    if (!data || !Array.isArray(data.timeseries) || !Array.isArray(data.values)) {
      console.error("Invalid data format. Expected { timeseries: [], values: [] }");
      return;
    }

   
    const chartContainer = document.getElementById("graph");
    if (!chartContainer) {
      console.error("Graph container not found in the DOM.");
      return;
    }

    
    const chart = echarts.init(chartContainer);

    
    const option = {
      title: {
        text: "Performance Metric Over Time",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          return params
            .map((item) => `Time: ${item.axisValue}<br/>Value: ${item.data}`)
            .join("<br>");
        },
      },
      xAxis: {
        type: "category",
        data: data.timeseries,
        name: "Time",
        nameLocation: "middle",
        nameGap: 25,
      },
      yAxis: {
        type: "value",
        name: "Metric Value",
        nameLocation: "middle",
        nameGap: 35,
        splitLine: {
          show: true,
        },
      },
      series: [
        {
          name: "Metric Value",
          type: "line",
          data: data.values,
          smooth: true,
          color: "#5470C6",
          lineStyle: {
            width: 2,
          },
          areaStyle: {
            opacity: 0.2,
          },
        },
      ],
    };

   
    chart.setOption(option);

   
    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <div
      id="graph"
      style={{
        width: "100%",
        height: "400px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
     
      {(!data || !data.timeseries || !data.values) && (
        <p style={{ color: "red" }}>No data to display.</p>
      )}
    </div>
  );
};

export default Graph;
