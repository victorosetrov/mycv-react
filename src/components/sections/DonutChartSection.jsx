// DonutChartSection.jsx

import React from "react";
import DonutChart from "./DonutChart"; // Adjust the path as needed
import "../../styles/DonutChartSection.css"; // Ensure you create and import the corresponding CSS file

const DonutChartSection = ({ data }) => {
  return (
    <section className="donut-chart-section">
      <h2 className="section-title">My Work Experience Breakdown</h2>
      <DonutChart data={data} />
    </section>
  );
};

export default DonutChartSection;
