const Graphics = {
  chart: {},
  execute: () => {
    const ctx = document.getElementById("myChart").getContext("2d");

    const labels = ["0"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#3989c7",
          borderColor: "#3989c7",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {},
    };

    Graphics.chart = new Chart(ctx, config);
  },
};

export default Graphics;
