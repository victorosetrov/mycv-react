// DonutChart.jsx

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DonutChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    if (data && data.length) {
      drawChart();
    }
  }, [data]);

  const drawChart = () => {
    // Define the dimensions and margins of the graph
    const width = 360;
    const height = 360;
    const margin = 10;

    // Clear previous SVG to avoid overlapping
    d3.select(ref.current).selectAll("svg").remove();

    // The radius of the pie chart is half the smallest side
    const radius = Math.min(width, height) / 2 - margin;

    // Append SVG object to the div
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Set the color scale
    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    // Compute the position of each group on the pie
    const pie = d3.pie().value((d) => d.value);

    // Shape helper to build arcs
    const arc = d3
      .arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    // Create a tooltip div that is hidden by default
    const tooltip = d3
      .select(ref.current)
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "white")
      .style("border", "1px solid black")
      .style("padding", "5px");

    // Build the pie chart
    svg
      .selectAll("pieces")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => colors(i))
      .on("mouseover", (event, d) => {
        // Update and display the tooltip
        const tooltipText = `${d.data.label}: ${d.data.value} months`;
        tooltip.html(tooltipText).style("visibility", "visible");
      })
      .on("mousemove", (event) => {
        // Position the tooltip
        tooltip
          .style("top", event.pageY - 10 + "px")
          .style("left", event.pageX + 10 + "px");
      })
      .on("mouseout", () => {
        // Hide the tooltip
        tooltip.style("visibility", "hidden");
      });
  };

  return <div ref={ref} className="donut-chart"></div>;
};

export default DonutChart;
