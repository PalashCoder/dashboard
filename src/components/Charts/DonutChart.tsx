import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  data: number[];
  labels: string[];
  colors: string[];
  title: string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  labels,
  colors,
  title,
}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default DonutChart;
