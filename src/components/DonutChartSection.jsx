import React, { useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartSection = ({ chartData }) => {
  const chartRef = useRef(null);
  const [hoveredLabel, setHoveredLabel] = useState(null);

  const data = {
    labels: chartData.map((item) => item.label),
    datasets: [
      {
        data: chartData.map((item) => item.value),
        backgroundColor: chartData.map((item) => item.color),
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length > 0) {
        const elementIndex = chartElement[0].index;
        const label = data.labels[elementIndex];
        const value = chartData[elementIndex].value;
        setHoveredLabel(`${label}: ${value} months`);
      } else {
        setHoveredLabel(null);
      }
    },
  };

  return (
    <section className="donut-chart-section">
      <div className="donut-chart-wrapper">
        <div className="donut-chart">
          <Doughnut ref={chartRef} data={data} options={options} />
        </div>
        {hoveredLabel && (
          <div
            className="custom-tooltip"
            style={{
              maxWidth: '300px',
              whiteSpace: 'normal',
              wordWrap: 'break-word',
              color: '#000', // Set text color explicitly
            }}
          >
            {hoveredLabel}
          </div>
        )}
      </div>
    </section>
  );
};

export default DonutChartSection;
