/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default function Chart({
  chartStateData,
  chartType,
  chartTitle,
  chartLabels
}) {
  let value = {
    labels: [...chartLabels],
    datasets: [
      {
        data: [...chartStateData, 0],
        backgroundColor: [
          "rgba(46, 134, 193  ,   0.6)",
          "rgba(40, 180, 99, 0.6)",
          "rgba(140, 10, 99, 0.6)"
        ]
      }
    ]
  };

  // Render for when the prop.chartType is a Bar
  if (chartType === "Bar") {
    return (
      <div className="chart">
        <Bar
          data={value}
          // width={10}
          height={350}
          options={{
            title: {
              display: true,
              text: chartTitle
            }
          }}
        />
      </div>
    );
  }

  // Render for when the prop.chartType is a Pie
  if (chartType === "Pie") {
    return (
      <div className="chart">
        <Pie
          data={value}
          height={350}
          options={{
            title: {
              display: true,
              text: chartTitle
            }
          }}
        />
      </div>
    );
  }

  // Render for when the prop.chartType is a Line
  if (chartType === "Line") {
    return (
      <div className="chart">
        <Line
          data={value}
          options={{
            title: {
              display: true,
              text: chartTitle
            }
          }}
        />
      </div>
    );
  }
}
