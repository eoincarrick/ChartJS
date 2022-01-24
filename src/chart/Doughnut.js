import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import React, { useRef, useCallback } from "react";

function randomNum() {
  let numbers = [];
  let i = 20;
  while (i < 100) {
    numbers.push(i);
    i++;
  }
  const int = Math.floor(Math.random() * numbers.length);
  return numbers[int];
}
randomNum();

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Black", "Eoin"],
  datasets: [
    {
      label: "My Label",
      data: [
        randomNum() - 12,
        randomNum() + 12,
        randomNum() * 6.9,
        randomNum() / 12,
        randomNum() % 12,
        randomNum() ** 0 + 89,
      ],
      backgroundColor: ["#ff6", "#333", "#f32", "#fff", "#e234", "#a56"],
      hoverOffset: 4,
    },
  ],
};

Chart.register(CategoryScale);

function DoughnutChart() {
  let ref = useRef(null);

  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);
  return (
    <div className="doughnutChart">
      <h1>Hey! Chart</h1>
      <div>
        <Doughnut ref={ref} data={data} />
      </div>
      <button type="button" onClick={downloadImage}>
        Download
      </button>
    </div>
  );
}

export default DoughnutChart;
